$("#home-icon").click(function() {
    window.location.href = "index";
});

$("#skills-icon").click(function() {
    window.location.href = "skills";
});

$("#projects-icon").click(function() {
    window.location.href = "projects";
});

$("#extras-icon").click(function() {
    window.location.href = "extras";
});

$("#contact-icon").click(function() {
    window.location.href = "contact";
});

$("#linkedin-icon").click(function() {
    window.location.href = "https://www.linkedin.com/in/oscar-dadfar-3699b15b/";
});

$("#vimeo-icon").click(function() {
    window.location.href = "https://www.vimeo.com/cardadfar";
});

$("#processing-icon").click(function() {
    window.location.href = "https://www.openprocessing.org/user/103089";
});

$("#git-icon").click(function() {
    window.location.href = "https://github.com/cardadfar";
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

$("#idance").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/257607289");
    loadFrame();
});

$("#break-free").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/253337182");
    loadFrame();
});

$("#peace-sign").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250210552");
    loadFrame();
});

$("#null-space").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249094937");
    loadFrame();
});

$("#infinite").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249187332");
    loadFrame();
});

$("#plastic-promises").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249258739");
    loadFrame();
});

$("#stitches").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249324773");
    loadFrame();
});

$("#rondo").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250281441");
    loadFrame();
});

function loadFrame() {
    $(".video-player").addClass("video-player-on");
    $(".video-bg").addClass("video-player-on");
    $(".dark-frame").addClass("dark-frame-on");
    setTimeout(function() {
        $(".video-bg").addClass("video-bg-error");
    }, 2000);
}

$("#web-dev").click(function() {
    window.location.href = "https://cardadfar.github.io/Web-Dev-Weekend-Website/index.html";
});

$("#worm-park").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/505150";
});

$("#sound-map").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/500725";
});

$("#my-minor-melody").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/478222";
});

$(".dark-frame").click(function() {
    $(".video-player").removeClass("video-player-on");
    $(".video-bg").removeClass("video-player-on");
    $(".dark-frame").removeClass("dark-frame-on");
    $(".video-bg").removeClass("video-bg-error");
    setTimeout(function() {
        $("iframe").attr("src","");
    }, 500);
});

