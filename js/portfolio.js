 $.jribbble.getShotsByPlayerId('krzys_wszel', function (playerShots) {
     var html = [];

     //PORTFOLIO SETUP

     $.each(playerShots.shots, function (i, shot) {
         html.push('<li><a href="' + shot.url + '">');
         html.push('<img src="' + shot.image_teaser_url + '" ');
         html.push('alt="' + shot.title + '"></a>');
         html.push('<h3><a href="' + shot.url + '">' + shot.title + '</h3>');
         html.push('<div class="likecount"><span class="icon-heart"></span> ' + shot.likes_count + '</div>');
         html.push('<div class="commentcount"><span class="icon-bubbles"></span> ' + shot.comments_count + '</a></li></div>');
     });

     $('#shotsByPlayerId').html(html.join(''));
 }, {
     page: 1,
     per_page: 9
 });


 //SCROLLBAR  

 $("html").niceScroll({
     mousescrollstep: 50,
     cursorcolor: "#ea9312",
     cursorwidth: "10px",
     cursorborderradius: "10px",
     cursorborder: "none",
 });


 //SMOOTHSCROLL

 $(function () {
     $('a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return false;
             }
         }
     });
 });


 //NAVBAR

 (function ($) {
     $(document).ready(function () {
         $(".navbar").hide();
         $(function () {
             $(window).scroll(function () {
                 if ($(this).scrollTop() > 40) {
                     $('.navbar')
                         .removeClass('animated fadeOutUp')
                         .addClass('animated fadeInDown')
                         .fadeIn();
                 } else {
                     $('.navbar')
                         .removeClass('animated fadeInDown')
                         .addClass('animated fadeOutUp')
                         .fadeOut();
                 }
             });
         });

     });
 }(jQuery));


 //icon hover effect

 $('#services img').hover(
     function () {
         $(this).addClass('animated pulse')
     },
     function () {
         $(this).removeClass('animated pulse')
     })
