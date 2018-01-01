$("#home-icon").click(function() {
    window.location.href = "index.html";
});

$("#skills-icon").click(function() {
    window.location.href = "skills.html";
});

$("#projects-icon").click(function() {
    window.location.href = "projects.html";
});

$("#extras-icon").click(function() {
    window.location.href = "extras.html";
});

$("#contact-icon").click(function() {
    window.location.href = "contact.html";
});

$("#vimeo-icon").click(function() {
    window.location.href = "https://www.vimeo.com/cardadfar";
});

$("#linkedin-icon").click(function() {
    window.location.href = "https://www.linkedin.com/in/oscar-dadfar-3699b15b";
});

$("#git-icon").click(function() {
    window.location.href = "https://github.com/cardadfar";
});

$("#extra-icon").click(function() {
    window.location.href = "https://www.google.com/";
});



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
    }, 1000);
});

$(".resume-button-hover").hover(function() {
    $(this).addClass("resume-button-on");
    }, function() {
    $(this).removeClass("resume-button-on");
});

$(".resume-button-hover").click(function() {
    window.location.href = "https://drive.google.com/file/d/1dPZD_ZV52Vh8O7ii9_Y-EqXdiiAaVzDR/view?usp=sharing";
});


$(".icon").hover(function() {
    $(this).attr("src","assets/icon.png");
    }, function() {
    $(this).attr("src","assets/grey-icon.png");
});


$(".cover-image").hover(function() {
    $(this).addClass("video-screen-on");
    }, function() {
    $(this).removeClass("video-screen-on");
});

$(".cover-image-right").hover(function() {
    $(this).addClass("video-screen-on");
    }, function() {
    $(this).removeClass("video-screen-on");
});

$("#null-space").click(function() {
    window.location.href = "https://vimeo.com/249094937";
});

$("#infinite").click(function() {
    window.location.href = "https://vimeo.com/249187332";
});

$("#plastic-promises").click(function() {
    window.location.href = "https://vimeo.com/249258739";
});

$("#stitches").click(function() {
    window.location.href = "https://vimeo.com/249324773";
});
