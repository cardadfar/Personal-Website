
$(document).ready(function(){

    $(".active-cover").hover(function() {

        $(this).children(".cover-image").addClass("video-screen-on");
        //$(".video-skills").children().css({"transform": "scale(1)", "margin-left" : "6%"});
        $(this).children(".cover-image").css({"animation": "0.5s mask", "animation-timing-function" : "cubic-bezier(0,.26,.61,1)"});


        }, function() {


        $(this).children(".cover-image").removeClass("video-screen-on");
        //$(".video-skills").children().css({"transform": "", "margin-left" : "8%"});
        $(this).children(".cover-image").css({"animation": "", "animation-timing-function" : ""});
    });



    //------------------------ FOR DESKTOP -------------------------------

    

        $(".sketcher").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/283946326");
            file = "sketcher";
            window.location.hash = file;
            loadFrame();
        });

        $(".frontline").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/543421317");
            file = "frontline";
            window.location.hash = file;
            loadFrame();
        });

        $(".food-drive").click(function() {
            $("iframe").attr("src","https://www.youtube.com/embed/m64gcFp4nro");
            file = "food-drive";
            window.location.hash = file;
            loadFrame();
        });

        $(".how-far-weve-come").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/267934726");
            file = "how-far-weve-come";
            window.location.hash = file;
            loadFrame();
        });

        $(".la-da-dee").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/268613841");
            file = "la-da-dee";
            window.location.hash = file;
            loadFrame();
        });

        $(".build-our-machine").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/269202925");
            file = "build-our-machine";
            window.location.hash = file;
            loadFrame();
        });

        $(".hibikase").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/268214437");
            file = "hibikase";
            window.location.hash = file;
            loadFrame();
        });

        $(".idance").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/257607289");
            file = "idance";
            window.location.hash = file;
            loadFrame();
        });

        $(".number-one").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/269206599");
            file = "number-one";
            window.location.hash = file;
            loadFrame();
        });

        $(".peace-sign").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/250210552");
            file = "peace-sign";
            window.location.hash = file;
            loadFrame();
        });

        $(".null-space").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/249094937");
            file = "null-space";
            window.location.hash = file;
            loadFrame();
        });

        $(".infinite").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/249187332");
            file = "infinite";
            window.location.hash = file;
            loadFrame();
        });

        $(".plastic-promises").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/249258739");
            file = "plastic-promises";
            window.location.hash = file;
            loadFrame();
        });

        $(".stitches").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/249324773");
            file = "stitches";
            window.location.hash = file;
            loadFrame();
        });

        $(".rondo").click(function() {
            $("iframe").attr("src","https://player.vimeo.com/video/250281441");
            file = "rondo";
            window.location.hash = file;
            loadFrame();
        });

        $(".dsg-university").click(function() {
            $("iframe").attr("src","");
            file = "dsg-university";
            window.location.hash = file;
            noVideo = true;
            loadFrame(noVideo);
        });

        $(".object-illum").click(function() {
            $("iframe").attr("src","");
            file = "object-illum";
            window.location.hash = file;
            noVideo = true;
            loadFrame(noVideo);
        });

        $(".water-shader").click(function() {
            $("iframe").attr("src","https://cardadfar.github.io/japanese_water_shader/");
            file = "water-shader";
            window.location.hash = file;
            loadFrame();
        });

        $(".multicore-maps").click(function() {
            $("iframe").attr("src","");
            file = "multicore-maps";
            window.location.hash = file;
            noVideo = true;
            loadFrame(noVideo);
        });

        $(".history-city").click(function() {
            $("iframe").attr("src","");
            file = "history-city";
            window.location.hash = file;
            noVideo = true;
            loadFrame(noVideo);
        });

        $(".gan-theft-auto").click(function() {
            $("iframe").attr("src","https://www.youtube.com/watch?v=2_QP4BVXTqk");
            file = "gan-theft-auto";
            window.location.hash = file;
            loadFrame();
        });

        $(".web-dev").click(function() {
            $("iframe").attr("src","https://cardadfar.github.io/Web-Dev-Weekend-Website/index.html");
            file = "web-dev-weekend";
            window.location.hash = file;
            loadFrame();
        });


        $(".stuco-site").click(function() {
            $("iframe").attr("src","http://tinyurl.com/stuco-bpw");
            file = "stuco-site";
            window.location.hash = file;
            loadFrame();
        });


        $(".personal-website").click(function() {
            $("iframe").attr("src","http://cardadfar.com");
            file = "personal-website";
            window.location.hash = file;
            loadFrame();
        });

        $(".worm-park").click(function() {
            $("iframe").attr("src","https://www.openprocessing.org/sketch/505150/embed/");
            file = "worm-park";
            window.location.hash = file;
            loadFrame();
        });

        $(".sound-map").click(function() {
            $("iframe").attr("src","https://www.openprocessing.org/sketch/500725/embed/");
            file = "sound-map";
            window.location.hash = file;
            loadFrame();
        });

        $(".my-minor-melody").click(function() {
            $("iframe").attr("src","https://www.openprocessing.org/sketch/478222/embed/");
            file = "my-minor-melody";
            window.location.hash = file;
            loadFrame();
        });

    
    


    function loadFrame(noVideo) {
        scroll = $(window).scrollTop();
        $(".video-player").addClass("video-player-on");
        $(".video-bg").addClass("video-player-on");
        $(".dark-frame").addClass("dark-frame-on");
        $(".all").css("position", "fixed");
        $(".all").css("overflow-y", "hidden");
        $(".vid").css("overflow-y", "auto");
        loadData(noVideo);
        setTimeout(function() {
            $(".video-bg").addClass("video-bg-error");
        }, 2000);
    }

    function loadData(noVideo) {

        $.getJSON( "assets/project-descriptions/" + file +".json", function( data ) {

        $(".video-bg").css("max-height", "0px");
        $(".video-bg").css("overflow", "hidden");

        if(!noVideo) {
            $(".video-bg").append("<div id='margin-top'></div>");
            $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;' id='text-bounce'>v</p>");
            bounceText();
            $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;'>Scroll down for more info. Click on the sides of the screen to exit.</p>");
            $(".video-player").removeClass("video-player-off");
        }
        else {
            $(".video-bg").append("<div style='margin-top: 50px;'></div>");
            $(".video-player").addClass("video-player-off");
        }
        

          $.each( data, function( key, val ) {

            if (key.charAt(0) == 't') {   //title
                $(".video-bg").append("<p class='hi' id='start-text'>" + val + "</p>");
                var anim_change1 = "<animate fill='freeze' id='animation-to-check1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
                var anim_change2 = "<animate fill='freeze' id='animation-to-check2' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
                var anim_change3 = "<animate fill='freeze' id='animation-to-check3' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
                var anim_origin1 = "<animate fill='freeze' id='animation-to-origin1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,0 20,0' />";
                var anim_origin2 = "<animate fill='freeze' id='animation-to-origin2' begin='indefinite' attributeName='points' dur='500ms' to='0,5 10,5 20,5' />";
                var anim_origin3 = "<animate fill='freeze' id='animation-to-origin3' begin='indefinite' attributeName='points' dur='500ms' to='0,10 10,10 20,10' />";
                $(".video-bg").append("<svg class='trigger' onclick='trigger()' width='20' height='10' style='cursor:pointer; margin-left:10%; padding: 15px; vertical-align:top;'> <polygon points='0,0 10,0 20,0' style='stroke:white;stroke-width:0.75;'>" + anim_change1 + anim_origin1 + "</polygon> <polygon points='0,5 10,5 20,5' style='stroke:white;stroke-width:0.75;'>" + anim_change2 + anim_origin2 + "</polygon> <polygon points='0,10 10,10 20,10' style='stroke:white;stroke-width:1;'>" + anim_change3 + anim_origin3 + "</polygon> </svg>");
                $(".video-bg").append("<div onclick='trigger()' style='cursor:pointer; font-family:UniqueDistrictThin; color:white; display:inline-block; line-height:40px;'>(click to expand stats)</div>");
            }

            else if (key.charAt(0) == 's')   //subtitle
                $(".video-bg").append("<p class='subtitle'>" + val + "</p>");

            else if (key.charAt(0) == 'd')   //subtitle
                $(".video-bg").append("<p class='description'>" + val + "</p>");

            else if (key.charAt(0) == 'i')   //image
                $(".video-bg").append("<img src='assets/project-descriptions/images/" + val + "'>");
            
            else if (key.charAt(0) == 'b')   //button
                $(".video-bg").append("<a href=" + val[1] + " target='_blank'><img class=video-bg-button src='assets/project-descriptions/images/buttons/" + val[0] + "'></a>");

            else if (key.charAt(0) == 'v')
                $(".video-bg").append("<iframe class='video-bg-player' src=" + val + " frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");

            else if (key.charAt(0) == 'l')   //list element
                $(".video-bg").append("<li>" + val + "</li>");

            else if (key.charAt(0) == 'a') {  //link element
                $(".video-bg").append("<a href='" + val + "'  target='_blank' style=text-decoration:underline;>" + val + "</a>");
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

        setTimeout(
          function() 
          {
            $(".video-bg").css("transition", "max-height 2s ease-in-out");
            $(".video-bg").css("max-height", "15000px");
          }, 500);

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

    

    $(".dark-frame").click(function() {
        $(".video-player").addClass("transparent-blur");
        $(".video-bg").addClass("transparent-blur");
        $(".dark-frame").removeClass("dark-frame-on");
        $(".all").css("position", "");
        $(".all").css("overflow-y", "");

        window.location.hash = ''
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
            $(".video-bg").css("max-height", "0px");
            $(".video-bg").css("transition", "unset");
            $("iframe").attr("src","");
            var myNode = document.getElementsByClassName("video-bg");
            myNode.innerHTML = '';
            $('.video-bg').empty();
        }, 500);


    });



    var url = window.location.href;
    var end_val = url.substring(url.lastIndexOf('#') + 1);

    if( url.indexOf('#') > -1 ) {
        
        setTimeout(function() {
            $("#" + end_val)[0].click();
        }, 500);
        
    }
});


console.log("done, projects-interactions");