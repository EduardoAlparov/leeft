import Swiper from 'swiper';
import { Navigation, Freemode, Pagination, Controller, EffectFade, Autoplay } from 'swiper';

import { IS_TABLET } from './utils';


export default () => {
    const sections = document.querySelectorAll('.js-reviews-section');

    sections.forEach( (section) => {
        const textSwiperBox = section.querySelector('.reviews-section__text-swiper.swiper');
        const imagesSwiperBox = section.querySelector('.reviews-section__images-swiper.swiper');
        const thumbsSwiperBox = section.querySelector('.reviews-section__thumbs-swiper.swiper');
        let thumbsSwiper;

        if(!textSwiperBox | !imagesSwiperBox) return;

        if(thumbsSwiperBox) {
            thumbsSwiper = new Swiper(thumbsSwiperBox, {
                modules: [Autoplay],
                speed: 700,
                slidesPerView: 'auto',
                spaceBetween: 8,
                freeMode: true,
                allowTouchMove: false,
            });
        }

        const imageSwiper = new Swiper(imagesSwiperBox, {
            modules: [Navigation, Controller, Autoplay],

            speed: 700,
            slidesPerView: 1,
            spaceBetween: 8,

            watchSlidesProgress: true,
            allowTouchMove: false,

            controller: {
                control: [ thumbsSwiper]
            },
        });

        const textSwiper = new Swiper(textSwiperBox, {
            modules: [Navigation, Pagination, Controller, EffectFade],
            speed: 700,
            slidesPerView: 1,
            spaceBetween: 8,

            effect: IS_TABLET ? 'slide' : 'fade',
            fadeEffect: {
                crossFade: true,
            },

            controller: {
                control: [imageSwiper]
            },

            navigation: {
                nextEl: section.querySelector('.reviews-next-btn'),
                prevEl: section.querySelector('.reviews-prev-btn')
            },

            pagination: {
                el: section.querySelector('.reviews-section__pagination'),
                type: 'fraction'
            }
        });
    })
}
