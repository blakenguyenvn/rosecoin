/**
 * @Package: Caliber - Multi Purpose HTML Template
 * @Since: Caliber 1.0
 * This file is part of Caliber - Multi Purpose HTML package.
 */

jQuery(function($) {

    'use strict';

    var CALIBER_SETTINGS = window.CALIBER_SETTINGS || {};



    /*--------------------------------
        Gallery Filtering (MixItUp)
     --------------------------------*/

    CALIBER_SETTINGS.galleryFiltering = function() {

        if ($.isFunction($.fn.mixItUp)) {

            $('#gallery-mixitup').mixItUp({

                animation: {
                    duration: 480,
                    effects: 'fade translateX(10%) scale(0.25) stagger(58ms)',
                    easing: 'ease'
                },

                selectors: {
                    target: '.filter-item',
                    filter: '.filter-mixitup .filter'
                }

            });

        }
    }


    /*--------------------------------
        Gallery Filtering (MixItUp)
     --------------------------------*/

    CALIBER_SETTINGS.fancyBox = function() {
        if ($.isFunction($.fn.fancybox)) {
            $('.fancybox').fancybox();
        }
    }


    /*--------------------------------
        Parallax Scrolling
     --------------------------------*/
    CALIBER_SETTINGS.parallaxScrolling = function() {

        if ($.isFunction($.fn.localScroll)) {
            $('#parallax-nav-primary').localScroll(800);
            $('#parallax-nav-dark').localScroll(800);
            $('#parallax-mobile-menu').localScroll(800);

        }

        if ($.isFunction($.fn.parallax)) {

            $('#header').parallax("50%", 0.1);
            $('#about').parallax("50%", 0.1);
            $('#team').parallax("50%", 0.1);
            $('#services').parallax("50%", 0.1);
            $('#capabilities').parallax("50%", 0.1);
            $('#portfolio').parallax("50%", 0.1);
            $('#blog').parallax("50%", 0.1);
            $('#contact').parallax("50%", 0.1);

            //.parallax(xPosition, speedFactor, outerHeight) options:
            //xPosition - Horizontal position of the element
            //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
            //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport


        }
    }


    /*--------------------------------
        Fixed Header Menu for Parallax
     --------------------------------*/

    CALIBER_SETTINGS.fixedParallaxHeader = function() {

        if ($.isFunction($.fn.parallax)) {
            //  alert($(window).scrollTop() +" "+$("#slides").height());
            if ($(window).scrollTop() >= 50) {
                $('.header-parallax').addClass("fixed-top");
            } else {
                $('.header-parallax').removeClass("fixed-top");
            }
        }

    }


    /*--------------------------------
        Twitter Carousel
     --------------------------------*/

    CALIBER_SETTINGS.twitterCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#twitter-carousel").owlCarousel({
                autoPlay: false,
                stopOnHover: true,
                navigation: true,
                pagination: false,
                navigationText: ["<i class='mdi mdi-chevron-left'>", "<i class='mdi mdi-chevron-right'>"],
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Image Carousel (Made for you Section)
     --------------------------------*/

    CALIBER_SETTINGS.imageCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#image-slider").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: false,
                pagination: true,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
                lazyLoad : true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Slider Header Carousel
     --------------------------------*/

    CALIBER_SETTINGS.headerSliderCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#header-slider").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                navigationText: ["<i class='mdi mdi-chevron-left'>", "<i class='mdi mdi-chevron-right'>"],
                pagination: false,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                lazyLoad : true,
                autoHeight: true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Slider Header Carousel
     --------------------------------*/

    CALIBER_SETTINGS.inViewPortAnimation = function() {

        if ($.isFunction($.fn.viewportChecker)) {

            $('.inviewport').addClass("hiddenthis").viewportChecker({
                classToAdd: 'visiblethis',
                offset: 0,
                callbackFunction: function(elem) {
                    var effect = $(elem).attr("data-effect");
                    $(elem).addClass(effect);
                }
            });

        }

    }



    /*--------------------------------
        Mobile Menu
     --------------------------------*/

    CALIBER_SETTINGS.mobileMenu = function() {

        var mobile_str = "";
        $(".menu-ul").each(function() {
            mobile_str += $(this).html();
        });

        $(".menu-mobile ul.menu").html(mobile_str);

        $(".menu-toggle").on('click', function() {
            $(".menu-mobile.cssmenu").toggleClass("open");
            $(this).toggleClass("mdi-menu mdi-close");
        });

        $('.menu-mobile.cssmenu li.has-sub a').on('click', function(e) {
            $(this).parent().children("ul").toggleClass("open");
            $(this).find("i").toggleClass("open");
            e.stopPropagation();
        });
    }



    /*--------------------------------
        Contact AJAX Form
     --------------------------------*/

    CALIBER_SETTINGS.validateContactForm = function() {

        // $('#c_name').keyup(function() {
        //     var name = $("#c_name").val();
        //     if (name == null || name == "") {
        //         $("#c_name").removeClass("green");
        //         console.log(name + "name err");
        //     } else {
        //         $("#c_name").addClass("green");
        //         console.log("name done");
        //     }
        //     enable_form();
        // });

        $('#c_email').keyup(function() {

            var email = $("#c_email").val();
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");

            if (email == null || email == "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                $("#c_email").removeClass("green");
                console.log("email err");
            } else {
                $("#c_email").addClass("green");
                console.log("email done");
            }
            enable_form();
        });

        // $('#c_phone').keyup(function() {

        //     var phone = $("#c_phone").val();
        //     var phoneRE = /^[\d\.\-]+$/;

        //     if (phone == null || phone == "" || phone.length < 10 || !phoneRE.test(phone)) {
        //         $("#c_phone").removeClass("green");
        //         console.log("phone err");
        //     } else {
        //         $("#c_phone").addClass("green");
        //         console.log("phone done");
        //     }
        //     enable_form();

        // });

        $('#c_message').keyup(function() {

            var message = $("#c_message").val();
            if (message == null || message == "" || message.length < 9) {
                $("#c_message").removeClass("green");
                console.log("message err");
            } else {
                $("#c_message").addClass("green");
                console.log("message done");
            }

            enable_form();

        });

    }


    CALIBER_SETTINGS.sendMessageAJAX = function() {

        $("#c_send").on('click', function() {
            if ($(this).hasClass("disabled")) {
                        $("#response_email").html("Please Fill in your details correctly and try again");
            } else {

              var email = $('#c_email').val();
              var name = $('#c_name').val();
              var phone = $('#c_phone').val();
              var msg = $('#c_message').val();

                var xmlhttp;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 1) {
                        $("#response_email").html("Sending...");
                    }
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        $("#response_email").html(xmlhttp.responseText);
                    }
                }
                xmlhttp.open("POST", "maintainemail.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send("email=" + encodeURIComponent(email) + "&name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) + "&msg=" + encodeURIComponent(msg));
                return false;

            }
        });

    }


    function enable_form() {
        //$("#c_name").hasClass("green") &&
        //$("#c_phone").hasClass("green") &&
        if ($("#c_email").hasClass("green") &&
            $("#c_message").hasClass("green")) {
            $("#c_send").removeClass("disabled");
            console.log("enabled");
        } else {
            $("#c_send").addClass("disabled");
            console.log("disabled");
        }

    }






    CALIBER_SETTINGS.isotopeMasonaryGallery = function() {


        if ($.isFunction($.fn.isotope)) {

            var $container = $('#gallery-isotope');
            $container.isotope({
                filter: '*',
                layoutMode: 'sloppyMasonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.filter-isotope .filter').click(function(){
                $('.filter-isotope .filter.active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    layoutMode: 'sloppyMasonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                 });
                 return false;
            }); 
        }       
    }




    /*--------------------------------
        Settings Panel
     --------------------------------*/

    CALIBER_SETTINGS.settingsPanel = function() {

        $(".settings-panel .toggle").on('click', function() {
            $(".settings-panel").toggleClass("collapsed");
            $(this).toggleClass("mdi-settings mdi-close");
        });

        $(".settings-panel .style div").on('click', function() {
            var sections = $(this).attr("data-sections");
            $("#settings-response").load('settings.php', {"sections":sections} );
            window.location.reload();
        });

        $(".settings-panel .colors div").on('click', function() {
            var color = $(this).attr("data-color");
            var colorfile = "";

            if(color == "yellow"){
                colorfile = "";
            } else {
                colorfile = "."+color;
            }

            $("#main-style").attr("href", "css/style" + colorfile + ".css");
            $(".settings-panel .colors div").removeClass("active");
            $(this).addClass("active");

            $("#settings-response").load('settings.php', {"color":color} );

            $(".style-dependent").each(function() {
                var src = $(this).attr("src");
                var oldsrc = src;
                src = src.replace("yellow",color); 
                src = src.replace("red",color); 
                src = src.replace("orange",color); 
                src = src.replace("blue",color); 
                src = src.replace("green",color); 

                if(src != oldsrc){
                    $(this).attr("src",src);
                }

            });



        });


    }

    /*--------------------------------
        Back to Top button
     --------------------------------*/
    CALIBER_SETTINGS.backToTopButton = function() {


            // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

        //hide or show the "back to top" link
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('cd-fade-out');
            }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });   
    }

    /*--------------------------------
        Click Tab then scroll to detail member
     --------------------------------*/
    CALIBER_SETTINGS.bindTabClickTeam = function() {
        $('.member .toggle-trigger[data-toggle="tab"]').each(function(){
            var tabToggle = $(this);
            var tabWrapper = $('#memberDetailWrapper');

            tabToggle.on('shown.bs.tab', function (e) {
                e.target // newly activated tab
                e.relatedTarget // previous active tab
                $('body,html').animate({
                    scrollTop: tabWrapper.offset().top - 70,
                    }, 300
                );
            })
        });
    }
    /*--------------------------------
        Moment + Coutndown: Set up countdown time
     --------------------------------*/
    CALIBER_SETTINGS.countDownInit = function() {
        moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
         var endDate = new Date('2017, 10-1, 01, 20');
         var fromDate = new Date();
         
        $('#whispersCountdown').countdown({
            until: $.countdown.UTCDate(-7, 2017, 10 - 1, 1, 20)
        });
        $('#year').text(endDate.getFullYear());
    }

    //== Balance
    CALIBER_SETTINGS.balanceHeightForChild = function(wrapper, item, minScreen){
        if(minScreen == undefined) {
          minScreen = 767;
        }
        wrapper.each(function(){
          if($(window).width() > minScreen) {
            var arrHeights = [];
            var maxHeight = '';

            wrapper.find(item).each(function(){
              $(this).css('height', '');
              arrHeights.push($(this).outerHeight());
            });

            maxHeight = Math.max.apply(null, arrHeights);

            wrapper.find(item).each(function(){
              $(this).css('height', maxHeight);
            });
          } else {
            wrapper.find(item).each(function(){
              $(this).css('height', '');
            });
          }
        });
      };

      /****
       **   Modal Handle event form submit
       **/
       CALIBER_SETTINGS.handleInnerModalEvent = function() {
            $('.modal').each(function(){
                var modal = $(this);
                var submitBtn = modal.find('form button[type="submit"]');
                submitBtn.click(function(){
                    modal.modal('hide');
                });
            });
       };

    /**
     *  Send mail with API
     **/
    CALIBER_SETTINGS.presalesContact = function() {
        // Get the form.
            var form = $('#presale-contact-form');

            // Get the messages div.
            var formMessages = form.find('#presale_notification');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })
                    .done(function (response) {
                        var data = JSON.parse(response);
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('error');
                        $(formMessages).addClass('success');

                        // Set the message text.
                        //$(formMessages).text('Thanks! Message has been sent.');
                        $('#presaleContactModal').modal('hide');
                        console.log(data);
                        
                        if (data.status === 'success') {
                            new Noty({
                                type: 'success',
                                layout: 'center',
                                timeout: '3000',
                                text: '<span>' + 'Your email has been sent successfully!' + '</span>',
                                closeWith: ['click'],
                                animation: {
                                    open : 'animated fadeInRight'
                                }
                            }).show();

                            // Clear the form.
                            $('#presale_mail').val('');
                            $('#presale_level').val('');
                            $('#presale_message').val('');

                        } else {
                            new Noty({
                                type: 'error',
                                layout: 'center',
                                timeout: '3000',
                                text: '<span>' + 'Something went wrong!' + '</span>',
                                closeWith: ['click'],
                                animation: {
                                    open : 'animated fadeInRight'
                                }
                            }).show();
                        }
                        
                    });

            });

    };

     /**
     *  Send mail with API
     **/
    CALIBER_SETTINGS.submitContactUs = function() {
        // Get the form.
            var form = $('#contact-us-form');

            // Get the messages div.
            var formMessages = form.find('#contact_notification');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('error');
                        $(formMessages).addClass('success');

                        // Set the message text.
                        $('#contactUsMessageModal').modal('hide');
                        //$(formMessages).text('Thanks! Message has been sent.');
                        new Noty({
                            type: 'success',
                            layout: 'center',
                            timeout: '3000',
                            text: '<span>' + 'Your email has been sent successfully!' + '</span>',
                            closeWith: ['click'],
                            animation: {
                                open : 'animated fadeInRight'
                            }
                        }).show();
                        // Clear the form.
                        $('#contact_mail').val('');
                        $('#contact_message').val('');
                    })
                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('success');
                        $(formMessages).addClass('error');

                        // Set the message text.
                        if (data.responseText !== '') {
                            //$(formMessages).text(data.responseText);
                            new Noty({
                                type: 'error',
                                layout: 'center',
                                timeout: '3000',
                                text: '<span>' + data.responseText + '</span>',
                                closeWith: ['click'],
                                animation: {
                                    open : 'animated fadeInRight'
                                }
                            }).show();
                        } else {
                            //$(formMessages).text('Oops! An error occured.');
                            new Noty({
                                type: 'error',
                                layout: 'center',
                                timeout: '3000',
                                text: '<span>Something went wrong!</span>',
                                closeWith: ['click'],
                                animation: {
                                    open : 'animated fadeInRight'
                                }
                            }).show();
                        }
                    });

            });

    };




    /**
     *  Send mail with API
     **/
    CALIBER_SETTINGS.subscribeEmail = function() {
        // Get the form.
        var form = $('#mc-embedded-subscribe-form');

        // Get the messages div.
        var formMessages = form.find('#subscribe_notification');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            // var formData = $(form).serialize();
            var formData = {
                'email': $('#mce-email').val()
            };
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: "/server/save-email.php",
                data: formData
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $('#contactUsMessageModal').modal('hide');
                    //$(formMessages).text('Thanks! Message has been sent.');
                    new Noty({
                        type: 'success',
                        layout: 'center',
                        timeout: '3000',
                        text: '<span>' + 'Your email has been sent successfully!' + '</span>',
                        closeWith: ['click'],
                        animation: {
                            open : 'animated fadeInRight'
                        }
                    }).show();
                    // Clear the form.
                    $('#mce-email').val('');
                    // $('#contact_message').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        //$(formMessages).text(data.responseText);
                        new Noty({
                            type: 'error',
                            layout: 'center',
                            timeout: '3000',
                            text: '<span>' + data.responseText + '</span>',
                            closeWith: ['click'],
                            animation: {
                                open : 'animated fadeInRight'
                            }
                        }).show();
                    } else {
                        //$(formMessages).text('Oops! An error occured.');
                        new Noty({
                            type: 'error',
                            layout: 'center',
                            timeout: '3000',
                            text: '<span>Something went wrong!</span>',
                            closeWith: ['click'],
                            animation: {
                                open : 'animated fadeInRight'
                            }
                        }).show();
                    }
                });

        });

    };
    /**
     *  Copy content function
     **/
    window.copyContent = function(id) {
        var copyTextarea = document.getElementById(id);
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Copied' : 'Cannot copy';
            //console.log('Copying text command was ' + msg);
            //$(formMessages).text(data.responseText);
            new Noty({
                type: 'alert',
                layout: 'center',
                timeout: '3000',
                text: '<span>' + msg + '</span>',
                closeWith: ['click'],
                animation: {
                    open : 'animated fadeInRight'
                }
            }).show();
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }
    /**
     *  Active Nice Select
     **/
    CALIBER_SETTINGS.activeNiceSelect = function() {
        $('.nice-select').each(function(){
            $(this).niceSelect();
        });
    }

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CALIBER_SETTINGS.galleryFiltering();
        CALIBER_SETTINGS.twitterCarousel();
        CALIBER_SETTINGS.imageCarousel();
        CALIBER_SETTINGS.headerSliderCarousel();
        CALIBER_SETTINGS.inViewPortAnimation();
        CALIBER_SETTINGS.mobileMenu();
        CALIBER_SETTINGS.validateContactForm();
        CALIBER_SETTINGS.sendMessageAJAX();
        CALIBER_SETTINGS.fancyBox();
        CALIBER_SETTINGS.parallaxScrolling();
        CALIBER_SETTINGS.settingsPanel();
        CALIBER_SETTINGS.backToTopButton();
        CALIBER_SETTINGS.bindTabClickTeam();
        CALIBER_SETTINGS.countDownInit();
        
        setTimeout(function(){
            CALIBER_SETTINGS.balanceHeightForChild($('div.features'), $('div.feature'), 640);
            CALIBER_SETTINGS.balanceHeightForChild($('section#press'), $('div.box-item .press-image'), 640);
        }, 300);
        //CALIBER_SETTINGS.handleInnerModalEvent();
        CALIBER_SETTINGS.presalesContact();
        CALIBER_SETTINGS.submitContactUs();
        CALIBER_SETTINGS.subscribeEmail();
        CALIBER_SETTINGS.activeNiceSelect();

        //== Languages
        $('#languagesSelect').bind('change', function(){
            var lang = $(this).val();
            window.changeLanguage(lang);
        });
   });

    $(window).scroll(function() {
        CALIBER_SETTINGS.fixedParallaxHeader();
    });

    $(window).resize(function() {
        setTimeout(function(){
            CALIBER_SETTINGS.balanceHeightForChild($('div.features'), $('div.feature'), 640);
            CALIBER_SETTINGS.balanceHeightForChild($('section#press'), $('div.box-item .press-image'), 640);
        }, 200);
    });

    $(window).load(function() {
        CALIBER_SETTINGS.isotopeMasonaryGallery();
    });

});
