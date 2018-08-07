

$("#sketcher").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/267934726");
    file = "sketcher";
    loadFrame();
});

$("#food-drive").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/267934726");
    file = "food-drive";
    loadFrame();
});

$("#how-far-weve-come").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/267934726");
    file = "how-far-weve-come";
    loadFrame();
});

$("#la-da-dee").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/268613841");
    file = "la-da-dee";
    loadFrame();
});

$("#build-our-machine").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/269202925");
    file = "build-our-machine";
    loadFrame();
});

$("#hibikase").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/268214437");
    file = "hibikase";
    loadFrame();
});

$("#idance").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/257607289");
    file = "idance";
    loadFrame();
});

$("#number-one").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/269206599");
    file = "number-one";
    loadFrame();
});

$("#break-free").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/253337182");
    file = "break-free";
    loadFrame();
});

$("#peace-sign").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250210552");
    file = "peace-sign";
    loadFrame();
});

$("#null-space").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249094937");
    file = "null-space";
    loadFrame();
});

$("#infinite").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249187332");
    file = "infinite";
    loadFrame();
});

$("#plastic-promises").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249258739");
    file = "plastic-promises";
    loadFrame();
});

$("#stitches").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249324773");
    file = "stitches";
    loadFrame();
});

$("#rondo").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250281441");
    file = "rondo";
    loadFrame();
});

function loadFrame() {
    scroll = $(window).scrollTop();
    $(".video-player").addClass("video-player-on");
    $(".video-bg").addClass("video-player-on");
    $(".dark-frame").addClass("dark-frame-on");
    $(".all").css("position", "fixed");
    $(".all").css("overflow-y", "hidden");
    $(".vid").css("overflow-y", "auto");
    loadData();
    setTimeout(function() {
        $(".video-bg").addClass("video-bg-error");
    }, 2000);
}

function loadData() {

    $.getJSON( "assets/project-descriptions/" + file +".json", function( data ) {

    $(".video-bg").append("<div id='margin-top'></div>");
    $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;' id='text-bounce'>v</p>");
    bounceText();
    $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;'>scroll down for more info</p>");

      $.each( data, function( key, val ) {

        if (key.charAt(0) == 't') {   //title
            $(".video-bg").append("<p class='hi' id='start-text'>" + val + "</p>");
            var anim_change1 = "<animate fill='freeze' id='animation-to-check1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_change2 = "<animate fill='freeze' id='animation-to-check2' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_change3 = "<animate fill='freeze' id='animation-to-check3' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_origin1 = "<animate fill='freeze' id='animation-to-origin1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,0 20,0' />";
            var anim_origin2 = "<animate fill='freeze' id='animation-to-origin2' begin='indefinite' attributeName='points' dur='500ms' to='0,5 10,5 20,5' />";
            var anim_origin3 = "<animate fill='freeze' id='animation-to-origin3' begin='indefinite' attributeName='points' dur='500ms' to='0,10 10,10 20,10' />";
            $(".video-bg").append("<svg class='trigger' onclick='trigger()' width='20' height='10' style='margin-left:10%; padding: 15px'> <polygon points='0,0 10,0 20,0' style='stroke:white;stroke-width:0.75;'>" + anim_change1 + anim_origin1 + "</polygon> <polygon points='0,5 10,5 20,5' style='stroke:white;stroke-width:0.75;'>" + anim_change2 + anim_origin2 + "</polygon> <polygon points='0,10 10,10 20,10' style='stroke:white;stroke-width:1;'>" + anim_change3 + anim_origin3 + "</polygon> </svg>");
        }

        else if (key.charAt(0) == 's')   //subtitle
            $(".video-bg").append("<p class='subtitle'>" + val + "</p>");

        else if (key.charAt(0) == 'd')   //subtitle
            $(".video-bg").append("<p class='description'>" + val + "</p>");

        else if (key.charAt(0) == 'i')   //image
            $(".video-bg").append("<img src='assets/project-descriptions/images/" + val + "'>");

        else if (key.charAt(0) == 'v')
            $(".video-bg").append("<iframe class='video-bg-player' src=" + val + " frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");

        else if (key.charAt(0) == 'l')   //list element
            $(".video-bg").append("<li>" + val + "</li>");

        else if (key.charAt(0) == 'a') {  //link element
            $(".video-bg").append("<a href='" + val + "'  target='_blank'>" + val + "</a>");
            $(".video-bg").append("<div class='line'></div>");
        }

        else if (key.charAt(0) == 'c')  //link element
            $(".video-bg").append("<div id='codeBit'><code>" + val + "</code></div>");

        else if (key.charAt(0) == 'p')   //text
            $(".video-bg").append("<p class='indent'>" + val + "</p>");

        else if (key.charAt(0) == 'w') {   //intro data
            $(".video-bg").append("<div class='drop-shadow'></div>");
            $(".video-bg").append("<div class='collapse-menu'></div>");
            $(".video-bg").append("<div style='margin-top: 10px'></div>");
            for(var i = 0; i < val.length; i++) {
                $.each( val[i], function( k_key, k_val ) {
                    if(k_key == 'music-icon.png')
                        $(".collapse-menu").append("<div class='more-info'><img src='assets/project-descriptions/images/" + k_key + "'><a href='" + k_val[0] + "'  target='_blank'>" + k_val[1] + "</a></div>");
                    else
                        $(".collapse-menu").append("<div class='more-info'><img src='assets/project-descriptions/images/" + k_key + "'><p>" + k_val + "</p></div>");
                });
            }
        }

        });

    $(".video-bg").append("<div style='height: 25px'></div>");

    });
}

var triggerCount = 0;

function trigger() {
    triggerCount++;
    $("trigger").css("max-height", "300px");
    if(triggerCount % 2 == 1) {
        document.getElementById("animation-to-check1").beginElement();
        document.getElementById("animation-to-check2").beginElement();
        document.getElementById("animation-to-check3").beginElement();
        $(".collapse-menu").css("max-height", "300px");
        $(".drop-shadow").css("opacity", "0.65");
    }
    else
    {
        document.getElementById("animation-to-origin1").beginElement();
        document.getElementById("animation-to-origin2").beginElement();
        document.getElementById("animation-to-origin3").beginElement();
        $(".collapse-menu").css("max-height", "");
        $(".drop-shadow").css("opacity", "");
    }
}


function bounceText() {
    $("#text-bounce").css("transform", "translate(0,15px)");
    setTimeout(function() {
        $("#text-bounce").css("transform", "translate(0,25px)");
    }, 1000);
    setTimeout(function() {
        bounceText();
    }, 2000);
}

$("#gan-theft-auto").click(function() {
    window.open("https://drive.google.com/file/d/1jlcmtAxiU-ts4C86HRvTA_b7mhQ_92yf/view", '_blank');
});

$("#ar-typography").click(function() {
    window.open("https://github.com/cardadfar/AR-Typography", '_blank');
});

$("#web-dev").click(function() {
    $("iframe").attr("src","https://cardadfar.github.io/Web-Dev-Weekend-Website/index.html");
    file = "rondo";
    loadFrame();
});

$("#worm-park").click(function() {
    $("iframe").attr("src","https://www.openprocessing.org/sketch/505150/embed/");
    file = "rondo";
    loadFrame();
});

$("#sound-map").click(function() {
    $("iframe").attr("src","https://www.openprocessing.org/sketch/500725/embed/");
    file = "sound-map";
    loadFrame();
});

$("#my-minor-melody").click(function() {
    $("iframe").attr("src","https://www.openprocessing.org/sketch/478222/embed/");
    file = "my-minor-melody";
    loadFrame();
});

$(".dark-frame").click(function() {
    $(".video-player").addClass("transparent-blur");
    $(".video-bg").addClass("transparent-blur");
    $(".dark-frame").removeClass("dark-frame-on");
    $(".all").css("position", "");
    $(".all").css("overflow-y", "");
    triggerCount = 0;

    setTimeout(function() {
        $("html, body").animate({ scrollTop: (scroll.toString()) + "px" }, 1000);
    }, 300);

    setTimeout(function() {
        $(".video-player").removeClass("video-player-on");
        $(".video-bg").removeClass("video-player-on");
        $(".video-player").removeClass("transparent-blur");
        $(".video-bg").removeClass("transparent-blur");
        $(".video-bg").removeClass("video-bg-error");
        $("iframe").attr("src","");
        var myNode = document.getElementsByClassName("video-bg");
        myNode.innerHTML = '';
        $('.video-bg').empty();
    }, 500);
});


var url = window.location.href;
var end_val = url.substring(url.lastIndexOf('#') + 1);
console.log(url);
console.log(end_val);

if( end_val != "projects") {
    $("#" + end_val)[0].click();
}
