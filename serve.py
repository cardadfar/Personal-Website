#!/usr/bin/env python3
"""Local dev server for this site.

Mimics two things GitHub Pages does for the live site that Python's stock
`http.server` doesn't:
  * extensionless URLs:  /skills  ->  skills.html
  * (bonus) sends no-cache headers so edited CSS/JS always reload

Usage:  python3 serve.py [port]      (default port 8765)
"""
import http.server
import os
import sys


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        full = super().translate_path(path)
        _, ext = os.path.splitext(full)
        if not ext and not os.path.isdir(full) and os.path.isfile(full + ".html"):
            return full + ".html"
        return full

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):  # quieter log: only non-200s
        if len(args) > 1 and str(args[1]).startswith(("2", "3")):
            return
        super().log_message(fmt, *args)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler) as httpd:
        print(f"Serving on http://localhost:{port}  (Ctrl+C to stop)")
        httpd.serve_forever()
