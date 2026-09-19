


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
        }
    }
});


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
    window.open("assets/resume.pdf", '_blank');
});


//----------------------------------------------------------------------------------


$(".icon").hover(function() {
    $(this).attr("src","assets/icon.png");
    }, function() {
    $(this).attr("src","assets/grey-icon.png");
});


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
    window.open("http://15462.courses.cs.cmu.edu/fall2023/", '_blank');
});

$("#course-vcs").click(function() {
    window.open("http://graphics.cs.cmu.edu/courses/15469/s22/", '_blank');
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

