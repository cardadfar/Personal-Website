// Photography tab: masonry grid built by script, "Show more" batches, and a lightbox.
(function () {
    var grid = document.getElementById("photo-grid");
    var moreBtn = document.getElementById("photo-more");
    if (!grid || !moreBtn) { return; }

    var BATCH = 20;
    var DIR = "assets/photos/";
    var photos = [];
    var shown = 0;
    var cols = [];

    function columnCount() {
        var w = window.innerWidth;
        return w <= 650 ? 1 : (w <= 1150 ? 2 : 3);
    }

    function buildColumns() {
        grid.innerHTML = "";
        cols = [];
        for (var i = 0; i < columnCount(); i++) {
            var el = document.createElement("div");
            el.className = "photo-col";
            grid.appendChild(el);
            cols.push({ el: el, h: 0 });
        }
    }

    function shortestColumn() {
        var best = cols[0];
        for (var i = 1; i < cols.length; i++) { if (cols[i].h < best.h) { best = cols[i]; } }
        return best;
    }

    // Photos fade in when they scroll into view (or when the tab is first shown),
    // a few at a time with a short stagger.
    var revealer = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
        var k = 0;
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) { return; }
            var el = entry.target;
            revealer.unobserve(el);
            setTimeout(function () { el.classList.add("photo-in"); }, 70 * k++);
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }) : null;

    function addPhoto(index) {
        var p = photos[index];
        var col = shortestColumn();
        var fig = document.createElement("figure");
        fig.className = "photo";
        fig.innerHTML = '<img src="' + DIR + "thumbs/" + p.src + '" alt="' + (p.alt || "Photograph " + (index + 1)) +
                        '" loading="lazy" style="aspect-ratio: ' + p.w + " / " + p.h + ';">';
        fig.addEventListener("click", function () { openLightbox(index); });
        col.el.appendChild(fig);
        col.h += p.h / p.w;          // relative height: all columns share one width
        if (revealer) { revealer.observe(fig); } else { fig.classList.add("photo-in"); }
    }

    function updateButton() {
        var left = photos.length - shown;
        moreBtn.style.display = left > 0 ? "" : "none";
        moreBtn.querySelector(".photo-more-count").textContent = left > 0 ? "  (" + left + " more)" : "";
    }

    function showMore() {
        var end = Math.min(shown + BATCH, photos.length);
        for (var i = shown; i < end; i++) { addPhoto(i); }
        shown = end;
        updateButton();
    }

    // Rebuild the columns (only when the column count changes, e.g. on resize).
    function relayout() {
        var n = shown;
        buildColumns();
        shown = 0;
        while (shown < n) { addPhoto(shown); shown++; }
        updateButton();
    }

    // Fisher-Yates shuffle so each visit shows a different selection and order.
    function shuffle(list) {
        for (var i = list.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = list[i]; list[i] = list[j]; list[j] = t;
        }
        return list;
    }

    $.getJSON(DIR + "photos.json", function (list) {
        photos = shuffle(list);
        buildColumns();
        showMore();
    });

    moreBtn.addEventListener("click", showMore);

    var resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { if (columnCount() !== cols.length) { relayout(); } }, 150);
    });

    // ---- lightbox ----
    var box = document.getElementById("lightbox");
    var img = box.querySelector(".lightbox-img");
    var counter = box.querySelector(".lightbox-counter");
    var current = -1;

    function preload(i) {
        if (i < 0 || i >= photos.length) { return; }
        var im = new Image(); im.src = DIR + photos[i].src;
    }

    function show(i) {
        current = (i + photos.length) % photos.length;
        img.src = DIR + photos[current].src;
        img.alt = photos[current].alt || "Photograph " + (current + 1);
        counter.textContent = (current + 1) + " / " + photos.length;
        preload(current + 1); preload(current - 1);
    }

    function openLightbox(i) {
        show(i);
        box.classList.add("lightbox-open");
        box.setAttribute("aria-hidden", "false");
        var sbw = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty("--sbw", sbw + "px");
        document.documentElement.classList.add("modal-open");
    }

    function closeLightbox() {
        box.classList.remove("lightbox-open");
        box.setAttribute("aria-hidden", "true");
        document.documentElement.classList.remove("modal-open");
    }

    box.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    box.querySelector(".lightbox-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lightbox-next").addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) { closeLightbox(); } });
    document.addEventListener("keydown", function (e) {
        if (!box.classList.contains("lightbox-open")) { return; }
        if (e.key === "Escape") { closeLightbox(); }
        else if (e.key === "ArrowRight") { show(current + 1); }
        else if (e.key === "ArrowLeft") { show(current - 1); }
    });
})();
