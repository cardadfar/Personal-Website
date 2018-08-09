

function loadDataInitial() {

    var dest = "art-projects";

    $.getJSON( "assets/project-descriptions/projects-list.json", function( data ) {

        $.each( data, function( key, val ) {

            if( key == "comp-art" ) {
                dest = "cs-projects";
            }

            else {

                $("#" + dest).append("<div class=" + key + " id='video-icon'><div class='active-cover'><img class='cover-image' id=" + key + " src='assets/project-covers/cover-" + key + ".png'></div><img id='video-image' src='assets/project-covers/project-" + key + ".jpg'><p id='video-text'>" + val["l"][0] + "</p><p id='small-video-text'>" + val["l"][1] + "</p></div>"); 
            }

        });
    });

}

function loadData(str) {

    var param = str.toLowerCase();

    var first = false;

    $.getJSON( "assets/project-descriptions/projects-list.json", function( data ) {

        $.each( data, function( key, val ) {

            first = false;

            if( key != "comp-art") {
                
                for(var j = 0; j < (val["t"].length); j++) {

                    if( (val["t"][j]).indexOf(param) !== -1 && !first ) 
                    {

                        first = true;
                        $('.' + key).css('display', 'unset');

                    }

                    if(j == (val["t"].length) - 1 && !first) {
                        $('.' + key).css('display', 'none');
                    }

                }   
            }

        });
    });

}


loadDataInitial();

$(document).ready(function(){

    $(".searchbar").keyup(function(event) {

        var k = $(this).val();

        loadData(k);
        console.log(k);
    });
});