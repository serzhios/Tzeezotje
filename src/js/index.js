

// import svg4everybody from 'svg4everybody';

import $ from "jquery";

// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
// import Swiper from "swiper";
// import { Navigation } from 'swiper';
import "./import/modules";






$(document).ready(function () {

    // svg4everybody();
    new Swiper('.swiper-container', {
        loop: true,
        // direction: 'horizontal',
        // direction: 'vertical',
        noSwiping: true,
        // autoplay: {
        //     delay: 3000
        // },

        // freeMode: true,
        // mousewheel: {
        //     invert: true,
        //     releaseOnEdges: true,


        // },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // scrollbar: '.swiper-scrollbar',

    });
});
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++) {
    $(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}
