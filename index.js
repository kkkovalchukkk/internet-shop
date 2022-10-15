import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

import 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';

const swiper = new Swiper('.swiper', {
    slidesPerView: 7,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swp-next',
        prevEl: '.swp-prev',
    },
});