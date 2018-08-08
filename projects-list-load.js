var i = 0;

$.getJSON( "assets/project-descriptions/projects-list.json", function( data ) {

    $.each( data, function( key, val ) {

        i++;

        if( i % 2 == 1) {
            $(".projects-holder").append("<div id='video-icon'><div class='active-cover'><img class='cover-image' id=" + key + " src='assets/project-covers/cover-" + key + ".png'></div><img id='video-image' src='assets/project-covers/project-" + key + ".jpg' style='width:70%;'><p id='video-text'>" + val["l"][0] + "</p><p id='small-video-text'>" + val["l"][1] + "</p></div>");
            }

        else {
            $(".projects-holder").append("<div id='video-icon-right'><div class='active-cover-right'><img class='cover-image-right' id=" + key + " src='assets/project-covers/cover-" + key + ".png'></div><img id='video-image-right' src='assets/project-covers/project-" + key + ".jpg' style='width:70%;'><p id='video-text-right'>" + val["l"][0] + "</p><p id='small-video-text-right'>" + val["l"][1] + "</p></div>");
        }       

    });
});

$(".all").append("<script type='text/javascript' src='interactions.js'></script>");
$(".all").append("<script type='text/javascript' src='project-interactions.js'></script>");