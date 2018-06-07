 $(window).scroll(function () {
     if ($(this).scrollTop() > 700) {
         $(".navbar-default").addClass("navbar-fixed-top ");

     } else {
         $(".navbar-default").removeClass("navbar-fixed-top");
     }
 })
 $("document").ready(function () {
     $(".box").animate({
         "height": "350"
     }, 1500);

     $(".boxTwo").animate({
         "height": "250"
     }, 2000);
     $(".greeting").fadeIn(1500);

 })

 // Custom control
 var video = $('#bag').get(0);
 var $btn = $('#btn-play-pause');

 $btn.on('click', function () {
     if (video.paused) {
         video.play();
     } else {
         video.pause();
     }
 });
