// If you load your JavaScript at the bottom
(function ($) {
    "use strict"

    // var swiper = new Swiper(".hero-bg-slider", {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     pagination: {
    //         el: ".swiper-pagination",
    //     },
    // });

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
        // autoplay: {
        //     delay: 5000,
        // },
    });


}(jQuery));