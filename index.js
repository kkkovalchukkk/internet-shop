import './styles/index.scss';
import 'resetcss';
import 'boxicons';


import Swiper, {
    Navigation,
} from 'swiper';

const swiper = new Swiper('.swiper', {
    slidesPerView: 7,
    direction: 'horizontal',
    modules: [Navigation],
    navigation: {
        nextEl: '.swp-next',
        prevEl: '.swp-prev',
    },
});