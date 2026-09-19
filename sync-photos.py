#!/usr/bin/env python3
"""Sync the Photography tab with a folder of photos.

    python3 sync-photos.py ~/Downloads/cats            # add new photos
    python3 sync-photos.py ~/Downloads/cats --prune    # ...and remove ones deleted from the folder

For every image in the source folder that isn't already in assets/photos/
(matched by filename, case-insensitive), this writes:
  * assets/photos/<name>.jpg          1200px on the long side (lightbox)
  * assets/photos/thumbs/<name>.jpg    640px on the long side (grid)
and then rewrites assets/photos/photos.json (sorted by filename) with each
photo's dimensions. Already-processed photos are skipped, so re-running is cheap.
Uses macOS `sips`, so no extra tools are needed.
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "assets", "photos")
THUMBS = os.path.join(OUT, "thumbs")
FULL_PX, FULL_Q = 1200, 82
THUMB_PX, THUMB_Q = 640, 78
EXTS = {".jpg", ".jpeg", ".png", ".heic", ".tif", ".tiff"}


def dims(path):
    r = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", path], capture_output=True, text=True).stdout
    return int(re.search(r"pixelWidth: (\d+)", r).group(1)), int(re.search(r"pixelHeight: (\d+)", r).group(1))


def convert(src, dst, px, q):
    subprocess.run(["sips", "-Z", str(px), "-s", "format", "jpeg", "-s", "formatOptions", str(q), src, "--out", dst],
                   check=True, capture_output=True)


def main(src_dir, prune=False):
    os.makedirs(THUMBS, exist_ok=True)
    added = removed = 0
    wanted = set()
    for f in sorted(os.listdir(src_dir)):
        stem, ext = os.path.splitext(f)
        if f.startswith(".") or ext.lower() not in EXTS:
            continue
        name = stem.lower() + ".jpg"
        wanted.add(name)
        full, thumb = os.path.join(OUT, name), os.path.join(THUMBS, name)
        if not os.path.exists(full):
            convert(os.path.join(src_dir, f), full, FULL_PX, FULL_Q); added += 1
        if not os.path.exists(thumb):
            convert(os.path.join(src_dir, f), thumb, THUMB_PX, THUMB_Q)
    if prune:
        for d in (OUT, THUMBS):
            for name in os.listdir(d):
                if name.lower().endswith(".jpg") and name not in wanted:
                    os.remove(os.path.join(d, name)); removed += 1
        removed //= 2  # counted once per photo (full + thumb)
    photos = []
    for name in sorted(n for n in os.listdir(OUT) if n.lower().endswith(".jpg")):
        w, h = dims(os.path.join(OUT, name))
        photos.append({"src": name, "w": w, "h": h})
    with open(os.path.join(OUT, "photos.json"), "w") as fh:
        json.dump(photos, fh, indent=1)
    print(f"added {added}, removed {removed}; {len(photos)} photo(s) in photos.json")


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if a != "--prune"]
    if len(args) != 1 or not os.path.isdir(args[0]):
        sys.exit("usage: python3 sync-photos.py <folder of photos> [--prune]")
    main(args[0], prune="--prune" in sys.argv)
