(function($){
    
    "use strict";

    $(window).load(function() {

        /* ==============================================
        Preloader
        =============================================== */

        var preloader = $("body").hasClass('no-preloader') ? false : true;

        var minimumTime = 500,
            preloaderDelay = 500,
            preloaderFadeOutTime = 800;

        function hidePreloader() {
            var preloader = $('.preloader'),
                loadingAnimation = $(preloader).find('.preloader-logo');
               
            setTimeout(function() {
                loadingAnimation.delay().fadeOut();
                preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
            }, minimumTime);
        }

        if(preloader) {
            hidePreloader();
        }

        /* ==============================================
        Contact Form
        =============================================== */

        var contactForm = $('.main-form');


        contactForm.on('submit', function() {
            var requiredFields = $(this).find('.required'),
                formData = contactForm.serialize(),
                formAction = $(this).attr('action');

            requiredFields.each(function() {
                var $this = $(this);
                if( $this.val() == "" ) {
                    $this.addClass('input-error');
                } else {
                    $this.removeClass('input-error');
                }
            });

            function validateEmail(email) { 
                var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return exp.test(email);
            }

            var emailField = $('.form-email');
            if( !validateEmail(emailField.val()) ) {
                emailField.addClass("input-error");
            }

            if ($(".main-form :input").hasClass("input-error")) {
                return false;
            } else {
                $.post(formAction, formData, function(data) {
                    requiredFields.val("");

                    console.log(data);

                    if(data == "success") {
                       $.magnificPopup.open({
                            items: {
                                src: $('#thanks-popup'),
                                type: 'inline'
                            }
                        }); 
                    } else {
                        //alert(data);
                    }
                    
                });

            }
            return false;
        });

        /* ==============================================
        Click Scroll
        =============================================== */

        $('a.cta').bind('click.smoothscroll',function (event) {
            event.preventDefault();

            var target = this.hash;

            $('html, body').stop().animate({
                'scrollTop': $(target).offset().top
            }, 500, 'easeInOutQuad');

        });


    });

    $(document).ready(function(){

        /* ==============================================
        Parallax
        =============================================== */

        $('.intro').parallax("50%", 0.2);

    });

})(jQuery);