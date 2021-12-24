$(function() {

    AOS.init();
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function() {
        $('.preloader').delay(500).fadeOut(500);
    });

    // navbar script
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
        var amountScrolled = 600;
        $(window).scroll(function() {
            if ($(window).scrollTop() > amountScrolled) {
                $('a.back-to-top').fadeIn('500');
            } else {
                $('a.back-to-top').fadeOut('500');
            }
        });


        /*=====================================
    Sticky
    ======================================= */
    // window.onscroll = function () {
    //     var section_navbar = document.querySelector(".navbar-area");
    //     var sticky = section_navbar.offsetTop;

    //     var logo = document.querySelector('.navbar-logo img')
    //     if (window.pageYOffset > sticky) {
    //       section_navbar.classList.add("sticky");
    //       logo.src = 'assets/img/Logo-color.svg';
    //     } else {
    //       section_navbar.classList.remove("sticky");
    //       logo.src = 'assets/img/Logo.svg';
    //     }
    // };

        
        //===== Section Menu Active

        // var scrollLink = $('.page-scroll');
        // // Active link switching
        // $(window).scroll(function () {
        //     var scrollbarLocation = $(this).scrollTop();
        //     // console.log(scrollbarLocation);
    
        //     scrollLink.each(function () {

        //         var $anchor = $(this);
        //         var sectionOffset = $($anchor.attr('href')).offset().top - 73;
        //         // console.log(sectionOffset);
        //         // alert(sectionOffset);
    
        //         if (sectionOffset <= scrollbarLocation) {
        //             $(this).parent().addClass('active');
        //             $(this).parent().siblings().removeClass('active');
        //         }
        //     });
        // });

    /* image modal - lightbox */
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

        /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 5000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 5,
		spaceBetween: 10,
        breakpoints: {
            // when window is <= 1199px
            1199: {
                slidesPerView: 4
            },
            // when window is <= 991px
            991: {
                slidesPerView: 5
            },
            // when window is <= 767px
            767: {
                slidesPerView: 3
            },
            521: {
                slidesPerView: 2
            }
        }
    });

    

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

});