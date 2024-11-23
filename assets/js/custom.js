// If you load your JavaScript at the bottom
(function ($) {
    "use strict"

    //Video popup
    $('.video-ply').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //image popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    //Masonary with Isotope
    $('.grid').masonry({
        itemSelector: '.grid-item',

    });
    $('.portfolio-menu li').on('click', function () {

        $(".portfolio-menu li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".grid").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                itemSelector: '.grid-item',
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    let $grid = $('grid').imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


    var swiper = new Swiper(".feature-slider", {
        slidesPerView: 3,
        loop: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
        },
        autoplay: {
            delay: 5000,
        },
    });

    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        loop: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".review-next",
            prevEl: ".review-prev",
        },
        autoplay: {
            delay: 5000,
        },
    });


}(jQuery));