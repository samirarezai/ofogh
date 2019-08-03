$(document).ready(function(){

    /*=======================effect for scroll spy=====================*/
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
   $(".nav-item .nav-link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            $('.actived').removeClass('actived');
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                $(this).parent().addClass('actived');
            });

        }  // End if
    });
    //============================button to top==========================//
    $("#top-btn").click(function(){
       $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

//============================responsive-menu-icon==========================//
    $('.bars').click(function(){
        if($(this).attr('data-open') == 'open'){
            $(this).find('.hamburger').addClass('opened');
            $(this).attr('data-open','close');}
        else {
            $(this).find('.hamburger').removeClass('opened');
            $(this).attr('data-open','open');
        }
    });
//=======================scroll navbar===================//
    $(window).scroll(function(){
        var y = $(this).scrollTop();
        if( y > 99){
            $('.navigation').addClass('style-navigation');

        } else if(y < 99 ){
            $('.navigation').removeClass('style-navigation');


        }
    });
//=======================animate for about===================//
    var $window = $(window);
    $window.on('scroll', check_if_in_view);

    $window.trigger('scroll');

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
         function about() {
            var $element = $('.about');
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((!($(this).hasClass('ok'))) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('ok');
                $('.about .image img').addClass('fadeInLeft');
                $('.about .caption').addClass('fadeInRight');
            } /*else {
                $element.removeClass('fadeInLeft');
            }*/
        };
        function cards() {
            var $element = $('.pack');
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            //check to see if this current container is within viewport
            if ((!($(this).hasClass('ok'))) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('ok');

                $('.pack .fade-up').addClass('fadeInUp');
                $('.pack .fade-right').addClass('fadeInRight');

            } /*else {
                $element.removeClass('fadeInLeft');
            }*/
        };
         about();
         cards();
    };


//=======================animate for package===================//
    $(".pack.not-modal .box-col").hover(function () {
        $(this).addClass("style-pack");
    },function () {
        $(this).removeClass("style-pack");
    });
//=======================tooltip===================//
    /*    $('[data-toggle="tooltip"]').tooltip();*/
//=======================caroudel===================//




});