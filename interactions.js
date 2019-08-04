




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


//----------------------------------------------------------------------------------

//---  INDEX  -----------------------  INDEX COMPONENTS  ---------------------------


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

$(".resume-button-hover").hover(function() {
    $(this).addClass("resume-button-on");
    }, function() {
    $(this).removeClass("resume-button-on");
});

$(".resume-button-hover").click(function() {
    window.open("assets/college_resume.pdf", '_blank');
});


//----------------------------------------------------------------------------------


//-----------------------------------  BOTTOM NAV BAR ICON JUMP   -----------------------------------


$("#linkedin-icon").hover(function() { bottomIconJump("#linkedin-icon-jump") ;})

$("#vimeo-icon").hover(function() { bottomIconJump("#vimeo-icon-jump") ;})

$("#processing-icon").hover(function() { bottomIconJump("#processing-icon-jump") ;})

$("#git-icon").hover(function() { bottomIconJump("#git-icon-jump") ;})

function bottomIconJump(str) {
    if(!($(str).hasClass("bottom-icon-jump-anim")) && ($(window).width() > 650)) {
        $(str).addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $(str).removeClass("bottom-icon-jump-anim"); 
        }, 2000);
    }
}


//---------------------------------------------------------------------------------------------------


$(".icon").hover(function() {
    $(this).attr("src","assets/icon.png");
    }, function() {
    $(this).attr("src","assets/grey-icon.png");
});







$("#C-F17-01").click(function() {
    window.open('http://www.cs.cmu.edu/~15122/', '_blank');
});

$("#C-F17-02").click(function() {
    window.open("http://math.cmu.edu/~cnewstea/teaching/21-127-S17/notes.pdf", '_blank');
});

$("#C-F17-03").click(function() {
    window.open("https://www.cmu.edu/dietrich/english/first_year/index.html", '_blank');
});

$("#C-F17-04").click(function() {
    window.open("https://www.cmucoursefind.xyz/courses/60-101/", '_blank');
});

$("#C-F17-05").click(function() {
    window.open("http://cmuems.com/2017/60210c/", '_blank');
});

$("#C-S18-01").click(function() {
    window.open("http://www.cs.cmu.edu/~15122/", '_blank');
});

$("#C-S18-02").click(function() {
    window.open("https://sites.google.com/site/artml2018/", '_blank');
});

$("#C-S18-03").click(function() {
    window.open("http://cmuems.com/2018/60212s/", '_blank');
});

$("#C-S18-04").click(function() {
    window.open("https://www.cmucoursefind.xyz/courses/60-110", '_blank');
});

$("#C-S18-05").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/collegeoffinearts/schoolofart/courses/courses.pdf", '_blank');
});

$("#C-S18-06").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/dietrichcollegeofhumanitiesandsocialsciences/departmentofmodernlanguages/courses/", '_blank');
});


$("#C-F18-01").click(function() {
    window.open("http://www.cs.cmu.edu/~15251/", '_blank');
});

$("#C-F18-02").click(function() {
    window.open("https://www.cs.cmu.edu/~213/", '_blank');
});

$("#C-F18-03").click(function() {
    window.open("http://www.stat.cmu.edu/academics/courselist", '_blank');
});

$("#C-F18-04").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/", '_blank');
});

$("#C-F18-05").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/", '_blank');
});

$("#C-F18-06").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/collegeoffinearts/schoolofart/courses/", '_blank');
});


$("#C-S19-01").click(function() {
    window.open("http://15462.courses.cs.cmu.edu/spring2019/", '_blank');
});

$("#C-S19-02").click(function() {
    window.open("http://www.cs.cmu.edu/~ninamf/courses/315sp19/", '_blank');
});

$("#C-S19-03").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/", '_blank');
});

$("#C-S19-04").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/", '_blank');
});

$("#C-S19-05").click(function() {
    window.open("http://www.cs.cmu.edu/~motoole2/16823-s19/", '_blank');
});

$("#C-S19-06").click(function() {
    window.open("http://coursecatalog.web.cmu.edu/dietrichcollegeofhumanitiesandsocialsciences/departmentofphilosophy/courses/", '_blank');
});

function openTab(tabName, tab) {

    var i, tabcontent, tablinks;

    tablinks = document.getElementsByClassName("tab-year");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.background = null;
        }

    document.getElementById(tab).style.background = "rgb(43, 43, 43)";

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


//-----------------------------------  VIDEO-SCREEN TRIGGER   -----------------------------------

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

