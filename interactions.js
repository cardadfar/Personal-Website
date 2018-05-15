




var file = "";

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


$(".icon").hover(function() {
    $(".circle-dashed").css({"width": "226px", "height": "226px"});
    $(".circle-dashed").css({"left": "calc(50% - 113px)", "top": "35px"});
    $(".circle-dashed").css("animation", "rotate 5s linear infinite");


    $("#circle-dashed2").css({"width": "240px", "height": "240px"});
    $("#circle-dashed2").css({"left": "calc(50% - 120px)", "top": "29px"});

    $(".rect-double").css("animation", "moveMask 2s cubic-bezier(.94,0,.09,1) infinite");
    }, function () {
    $(".circle-dashed").css({"width": "", "height": ""});
    $(".circle-dashed").css({"left": "", "top": ""});
    $(".circle-dashed").css("animation", "");

    $(".rect-double").css({"width": "", "height": ""});
    $(".rect-double").css({"left": "", "top": ""});
    $(".rect-double").css("animation", "");
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

    //bug();
});

function bug() {
    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
    bug();
}

$(".resume-button-hover").hover(function() {
    $(this).addClass("resume-button-on");
    }, function() {
    $(this).removeClass("resume-button-on");
});

$(".resume-button-hover").click(function() {
    window.location.href = "https://drive.google.com/file/d/1dPZD_ZV52Vh8O7ii9_Y-EqXdiiAaVzDR/view?usp=sharing";
});


//-----------------------------------  BOTTOM NAV BAR ICON JUMP   -----------------------------------


$("#linkedin-icon").hover(function() {
    if(!($("#linkedin-icon-jump").hasClass("bottom-icon-jump-anim"))) {
        $("#linkedin-icon-jump").addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $("#linkedin-icon-jump").removeClass("bottom-icon-jump-anim"); 
        }, 3000);
    }
})

$("#vimeo-icon").hover(function() {
    if(!($("#vimeo-icon-jump").hasClass("bottom-icon-jump-anim"))) {
        $("#vimeo-icon-jump").addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $("#vimeo-icon-jump").removeClass("bottom-icon-jump-anim"); 
        }, 3000);
    } 
})

$("#processing-icon").hover(function() {
    if(!($("#processing-icon-jump").hasClass("bottom-icon-jump-anim"))) {
        $("#processing-icon-jump").addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $("#processing-icon-jump").removeClass("bottom-icon-jump-anim"); 
        }, 3000);
    }
})

$("#git-icon").hover(function() {
    if(!($("#git-icon-jump").hasClass("bottom-icon-jump-anim"))) {
        $("#git-icon-jump").addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $("#git-icon-jump").removeClass("bottom-icon-jump-anim"); 
        }, 3000);
    }
})

//---------------------------------------------------------------------------------------------------


$(".icon").hover(function() {
    $(this).attr("src","assets/icon.png");
    }, function() {
    $(this).attr("src","assets/grey-icon.png");
});


$(".active-cover").hover(function() {

    $(this).children(".cover-image").addClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "scale(1)", "margin-left" : "6%"});
    $(this).children(".cover-image").css({"animation": "0.5s mask", "animation-timing-function" : "cubic-bezier(0,.26,.61,1)"});


    }, function() {


    $(this).children(".cover-image").removeClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "", "margin-left" : "8%"});
    $(this).children(".cover-image").css({"animation": "", "animation-timing-function" : ""});
});

$(".active-cover-right").hover(function() {

    $(this).children(".cover-image-right").addClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "scale(1)", "margin-left" : "6%"});
    $(this).children(".cover-image-right").css({"animation": "0.5s mask", "animation-timing-function" : "cubic-bezier(0,.26,.61,1)"});


    }, function() {


    $(this).children(".cover-image-right").removeClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "", "margin-left" : "8%"});
    $(this).children(".cover-image-right").css({"animation": "", "animation-timing-function" : ""});
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

    $(".video-bg").append("<div style='margin-top: calc(36.5625vw + 25px)'></div>");
    $(".video-bg").append("<p style='text-align: center; color: grey;' id='text-bounce'>v</p>");
    bounceText();
    $(".video-bg").append("<p style='text-align: center; color: grey;'>scroll down for more info</p>");

      $.each( data, function( key, val ) {

        if (key.charAt(0) == 't')   //title
            $(".video-bg").append("<p class='hi' id='start-text'>" + val + "</p>");

        else if (key.charAt(0) == 's')   //subtitle
            $(".video-bg").append("<p class='subtitle'>" + val + "</p>");

        else if (key.charAt(0) == 'd')   //subtitle
            $(".video-bg").append("<p class='description'>" + val + "</p>");

        else if (key.charAt(0) == 'i')   //image
            $(".video-bg").append("<img src='assets/project-descriptions/images/" + val + "'>");

        else if (key.charAt(0) == 'l')   //list element
            $(".video-bg").append("<li>" + val + "</li>");

        else if (key.charAt(0) == 'a') {  //link element
            $(".video-bg").append("<a href='" + val + "'>" + val + "</a>");
            $(".video-bg").append("<div class='line'></div>");
        }

        else if (key.charAt(0) == 'c')  //link element
            $(".video-bg").append("<div id='codeBit'><code>" + val + "</code></div>");

        else if (key.charAt(0) == 'p')   //text
            $(".video-bg").append("<p class='indent'>" + val + "</p>");
        });
    });
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
    window.location.href = "https://drive.google.com/file/d/1jlcmtAxiU-ts4C86HRvTA_b7mhQ_92yf/view";
});

$("#ar-typography").click(function() {
    window.location.href = "https://github.com/cardadfar/AR-Typography";
});

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
    $(".video-player").addClass("transparent-blur");
    $(".video-bg").addClass("transparent-blur");
    $(".dark-frame").removeClass("dark-frame-on");
    $(".all").css("position", "");
    $(".all").css("overflow-y", "");
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




$("#C-F17-01").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~15122/";
});

$("#C-F17-02").click(function() {
    window.location.href = "http://math.cmu.edu/~cnewstea/teaching/21-127-S17/notes.pdf";
});

$("#C-F17-03").click(function() {
    window.location.href = "https://www.cmu.edu/dietrich/english/first_year/index.html";
});

$("#C-F17-04").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/60-101/";
});

$("#C-F17-05").click(function() {
    window.location.href = "http://cmuems.com/2017/60210c/";
});

$("#C-S18-01").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~15122/";
});

$("#C-S18-02").click(function() {
    window.location.href = "https://sites.google.com/site/artml2018/";
});

$("#C-S18-03").click(function() {
    window.location.href = "http://cmuems.com/2018/60212s/";
});

$("#C-S18-04").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/60-110";
});

$("#C-S18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/collegeoffinearts/schoolofart/courses/courses.pdf";
});

$("#C-S18-06").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/dietrichcollegeofhumanitiesandsocialsciences/departmentofmodernlanguages/courses/";
});


$("#F18-01").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/17-428/f18";
});

$("#F18-02").click(function() {
    window.location.href = "https://www.cmu.edu/mits/files/syllabi/core%20courses/05-834%20MachineLearningInPractice%20Syllabus%20SP2015.pdf";
});

$("#F18-03").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~charlie/courses/17-214/2018-spring/";
});

$("#F18-04").click(function() {
    window.location.href = "https://www.math.cmu.edu/undergraduate/crs/36217.htm";
});

$("#F18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/";
});

$("#F18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/";
});


function openTab(tabName, tab) {

    var i, tabcontent, tablinks;

    tablinks = document.getElementsByClassName("tab-year");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.background = null;
        }

    document.getElementById(tab).style.background = "#34383d";

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