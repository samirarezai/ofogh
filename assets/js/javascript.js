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
            $('.active').removeClass('active');
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                $(this).parent().addClass('active');
            });



        }  // End if
    });
    $('.btn-to-top .top').click(function(){
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
        if( $(this).scrollTop() > 99){
            $('.navigation').addClass('style-navigation');
            /* $('.navigation .navbar-brand img').css('max-width','50px');*/

        } else if($(this).scrollTop() < 99 ){
            $('.navigation').removeClass('style-navigation');
            /*   $('.navigation .navbar-brand img').css('max-width','90px');*/

        }
    });












});