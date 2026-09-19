


var file = "";
var scroll = 0;

//---  GLOBAL  ------------------------  TOP NAV BAR  ------------------------------


$("#home-icon").click(function() {
    window.location.href = "index";
});

$("#skills-icon").click(function() {
    window.location.href = "skills";
});

$("#projects-icon").click(function() {
    window.location.href = "projects";
});

$("#experience-icon").click(function() {
    window.location.href = "experience";
});

$("#contact-icon").click(function() {
    window.location.href = "contact";
});


//----------------------------------------------------------------------------------

//---  GLOBAL  -----------------------  BOTTOM NAV BAR  ----------------------------


$("#linkedin-icon").click(function() {
    window.open("https://www.linkedin.com/in/oscar-dadfar-3699b15b/", '_blank');
});

$("#vimeo-icon").click(function() {
    window.open("https://www.vimeo.com/cardadfar", '_blank');
});

$("#processing-icon").click(function() {
    window.open("https://www.openprocessing.org/user/103089", '_blank');
});

$("#git-icon").click(function() {
    window.open("https://github.com/cardadfar", '_blank');
});


//----------------------------------------------------------------------------------

//---  GLOBAL  -----------------------  LINE ANIMATION  ----------------------------


$(document).ready(function() {
    $(".rectangle01").addClass("rectangle-animate01");
    setTimeout(function() {
        $(".rectangle01").addClass("rectangle-animate021");
    }, 500);
    $(".rectangle02").addClass("rectangle-animate01");
    setTimeout(function() {
        $(".rectangle02").addClass("rectangle-animate022"); 
    }, 500);
    setTimeout(function() {
        $(".center").addClass("center-fadeIn");
    }, 500);


    var url = window.location.href;
    var end_val = url.substring(url.lastIndexOf('#') + 1);

    if( url.includes("projects") ) {
        if( url.indexOf('#') > -1 ) {
            if (end_val == "apps") {
                setTimeout(function() {
                    openTab('year1', 'year1-tab')
                }, 500);
            }
            else if (end_val == "research") {
                setTimeout(function() {
                    openTab('year2', 'year2-tab')
                }, 500);
            }
            else if (end_val == "animations") {
                setTimeout(function() {
                    openTab('year3', 'year3-tab')
                }, 500);
            }
            else if (end_val == "misc") {
                setTimeout(function() {
                    openTab('year5', 'year5-tab')
                }, 500);
            }
            else if (end_val == "photography") {
                setTimeout(function() {
                    openTab('year6', 'year6-tab')
                }, 500);
            }
        }
    }
});


//----------------------------------------------------------------------------------

//---  CONTACT  -----------------------  MESSAGE FORM  ------------------------------


// Posts the form to the form service (Formspree-style JSON API) without leaving the page.
$(document).ready(function() {
    var form = document.getElementById("contact-form");
    if (!form) { return; }
    var status = form.querySelector(".contact-status");
    var button = form.querySelector(".contact-submit");
    var label = form.querySelector(".contact-submit-label");

    var FALLBACK_EMAIL = "hello@cardadfar.com";

    function setStatus(text, kind) {
        status.textContent = text;
        status.className = "contact-status" + (kind ? " is-" + kind : "");
    }

    // Error state that also offers a direct email link so a message is never lost.
    function setFailure(text) {
        setStatus(text + " You can also email me directly at ", "error");
        var a = document.createElement("a");
        a.href = "mailto:" + FALLBACK_EMAIL;
        a.textContent = FALLBACK_EMAIL;
        status.appendChild(a);
        status.appendChild(document.createTextNode("."));
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var invalid = false;
        form.querySelectorAll("input[required], textarea[required]").forEach(function(el) {
            var bad = !el.checkValidity();
            el.classList.toggle("is-invalid", bad);
            invalid = invalid || bad;
        });
        if (invalid) { setStatus("Please fill in every field with a valid email.", "error"); return; }


        button.disabled = true;
        label.textContent = "Sending\u2026";
        setStatus("");

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        }).then(function(res) {
            if (!res.ok) { throw new Error("HTTP " + res.status); }
            form.reset();
            label.textContent = "Sent";
            setStatus("Thanks! Your message is on its way.", "success");
        }).catch(function() {
            button.disabled = false;
            label.textContent = "Send Message";
            setFailure("Something went wrong sending that.");
        });
    });

    form.querySelectorAll("input, textarea").forEach(function(el) {
        el.addEventListener("input", function() { el.classList.remove("is-invalid"); });
    });
});


//----------------------------------------------------------------------------------

//---  INDEX  -----------------------  INDEX COMPONENTS  ---------------------------


// Intro lines fade in one after another the first time they scroll into view.
$(document).ready(function() {
    var lines = document.querySelectorAll(".intro-line");
    if (!lines.length) { return; }
    if (!("IntersectionObserver" in window)) {
        lines.forEach(function(l) { l.classList.add("intro-line-in"); });
        return;
    }
    var seen = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) { return; }
            var el = entry.target;
            setTimeout(function() { el.classList.add("intro-line-in"); }, 250 * el.dataset.order);
            seen.unobserve(el);
        });
    }, { threshold: 0.4 });
    lines.forEach(function(l, i) { l.dataset.order = i; seen.observe(l); });
});


// Intro video: swap the poster for the YouTube player on first click / Enter / Space.
$(".video-embed").on("click keydown", function(e) {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") { return; }
    e.preventDefault();
    if (this.querySelector("iframe")) { return; }
    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + this.dataset.videoId + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
    frame.title = "Introduction video";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    this.innerHTML = "";
    this.appendChild(frame);
    this.style.cursor = "default";
});


//----------------------------------------------------------------------------------


function openTab(tabName, tab) {

    var i, tabcontent, tablinks;

    tablinks = document.getElementsByClassName("tab-year");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.background = null;
        }

    document.getElementById(tab).style.background = "rgb(60, 60, 70)";

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}


function flicker(tab) {

    var delay = 600;
    var elem = '#C-' + tab + ':hover';

    document.getElementById(tab).style.color = "grey";

    setTimeout(function() {
        document.getElementById(tab).style.color = "white";
    }, delay);

    setTimeout(function() {
        if ($(elem).length != 0) {flicker(tab)};
    }, 2*delay);

}

$("#course-graphics").click(function() {
    window.open("https://15362.courses.cs.cmu.edu/fall2026/", '_blank');
});

$("#course-neural").click(function() {
    window.open("https://graphics.cs.cmu.edu/courses/15474/f26/", '_blank');
});

$("#course-vcs").click(function() {
    window.open("https://graphics.cs.cmu.edu/courses/15473/f25/", '_blank');
});
$("#course-ave").click(function() {
    window.open("https://cardadfar.github.io/stuco-animation-website/", '_blank');
});

$("#course-bpw").click(function() {
    window.open("https://cardadfar.github.io/stuco_webdev_website/", '_blank');
});

//-----------------------------------  VIDEO-SCREEN TRIGGER   -----------------------------------

var triggerCount = 0;

function trigger() {
    triggerCount++;
    var menu = document.querySelector(".collapse-menu");
    if (!menu) { return; }
    var opening = (triggerCount % 2 == 1);
    for (var i = 1; i <= 3; i++) {
        document.getElementById((opening ? "animation-to-check" : "animation-to-origin") + i).beginElement();
    }
    if (opening) {
        // Animate to the drawer's real height so the motion fills the whole duration.
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.classList.add("is-open");
        $(".drop-shadow").css("opacity", "0.65");
    }
    else {
        menu.style.maxHeight = "";
        menu.classList.remove("is-open");
        $(".drop-shadow").css("opacity", "");
    }
}

