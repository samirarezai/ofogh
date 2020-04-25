$(document).ready(function () {
    var height = window.innerHeight ? window.innerHeight : $(window).height();
    $('.header').height(height);
    $('.about').css('min-height', (height * (0.7)));
    $('.cards').css('min-height', (height * (0.7)));
    $('.slider').css('min-height', (height * (0.7)));
    $('.connection').css('min-height', (height * (0.7)));
    /*=======================effect for scroll spy=====================*/
    $('body').scrollspy({target: ".navbar", offset: 240});

    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('.actived').removeClass('actived');
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 185
            }, 600, function () {
                $(this).addClass('actived');
            });
        }
    });
    //============================button to top==========================//
    $("#top-btn").click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

//============================responsive-menu-icon==========================//
    $('.bars').click(function () {
        if ($(this).attr('data-open') == 'open') {
            $(this).find('.hamburger').addClass('opened');
            $(this).attr('data-open', 'close');
        } else {
            $(this).find('.hamburger').removeClass('opened');
            $(this).attr('data-open', 'open');
        }
    });
//=======================scroll navbar===================//
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 99) {
            $('.navigation').addClass('style-navigation');

        } else if (y < 99) {
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
            var element_top_position = $element.offset().top + 30;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((!($(this).hasClass('ok'))) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('ok');
                $('.about .image img').addClass('fadeInLeft');
                $('.about .caption').addClass('fadeInRight');
            }
        };

        function cards() {
            var $element = $('.pack');
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + 30;
            var element_bottom_position = (element_top_position + element_height);
            //check to see if this current container is within viewport
            if ((!($(this).hasClass('ok'))) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('ok');
                $('.pack .fade-up').addClass('fadeInUp');
                $('.pack .fade-right').addClass('fadeInRight');
            }
        };
        about();
        cards();
    };
//=======================animate for package===================//
    $(".pack.not-modal .box-col").hover(function () {
        $(this).addClass("style-pack");
    }, function () {
        $(this).removeClass("style-pack");
    });
    //=======================logo resane===================//
    var url_ofogh = window.location.hostname;
    if (url_ofogh.search('.ir') !== -1) {
        $('#logo_resane').html('<img id = \'jxlzfukzesgtrgvjnbqeoeuk\' style = \'cursor:pointer\' onclick = \'window.open("https://logo.samandehi.ir/Verify.aspx?id=160328&p=rfthgvkaobpdxlaouiwkmcsi", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")\' alt = \'logo-samandehi\' src = \'https://logo.samandehi.ir/logo.aspx?id=160328&p=nbpdwlbqlymaqftiodrfaqgw\' />');
    }
    //=======================ajax===================//
    setInterval(function () {
        let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/;
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        if (name != "") {

            $('.invalid-name').css('opacity', '0');
        }
        if (email != "" && (email_reg.test(email))) {
            $('.invalid-email').css('opacity', '0');
        }
        if (subject != "") {
            $('.invalid-subject').css('opacity', '0');
        }
        if (message != '') {
            $('.invalid-message').css('opacity', '0');
        }
    }, 300);
    $('#submit').click(function (event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/;
        let subject = $('#subject').val();
        let message = $('#message').val();
        let license = true;
        if (name == "") {
            $('.invalid-name').css('opacity', '1');
            license = false;
        }
        if (email == "" || (!(email_reg.test(email)))) {
            $('.invalid-email').css('opacity', '1');
            license = false;
        }
        if (subject == "") {
            $('.invalid-subject').css('opacity', '1');
            license = false;
        }
        if (message == '') {
            $('.invalid-message').css('opacity', '1');
            license = false;
        }
        if (license == false) {
            return false;
        }
        $('#submit').html('صبرکنید...');
        $.ajax({
            type: "POST",
            url: "https://ofoghplus.com/app/api/sendemail/",
            data: {
                name: name,
                subject: subject,
                email: email,
                text: message
            },
            success: function (response) {
                $('#submit').html('ارسال');
                if (response.statusCode === 200) {
                    $('#success').html('پیام شما با موفقیت ارسال شد');
                    $('#success').css('opacity', '1');
                    $('#contactform').each(function () {
                        this.reset();
                    });
                    setTimeout(function () {
                        $('#success').css('opacity', '0');
                        $('#success').css('color', 'green');
                    }, 7000);
                    $('#submit').attr('value', 'ارسال');
                }
            },
            error: function (xhr, status) {
                $('#success').css('opacity', '1');
                $('#success').css('color', 'red');
                $('#success').html('باخطا مواجه شدید');
            }
        });
        return false;
    });
});
