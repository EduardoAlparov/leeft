import Swiper from 'swiper';
import { Navigation, Freemode, Pagination, Controller, EffectFade, Autoplay } from 'swiper';

import { IS_TABLET } from './utils';
import { IS_MOBILE } from './utils';
import { IS_DESKTOP } from './utils';


export default () => {
    const sections = document.querySelectorAll('.js-reviews-section');
    const els = document.querySelectorAll('.js-reviews-carousel');

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

    els.forEach((el) => {
        const textSwiperBox = el.querySelector('.reviews__text-swiper.swiper');
        const imagesSwiperBox = el.querySelector('.reviews__gallery-swiper.swiper');
        const thumbsSwiperBox = el.querySelector('.reviews__thumbs-swiper.swiper');
        let thumbsSwiper;

        if(!textSwiperBox | !imagesSwiperBox) return;

        if(IS_DESKTOP) {
            imagesSwiperBox.setAttribute('dir', 'rtl')
        }

        const imageSwiper = new Swiper(imagesSwiperBox, {
            modules: [Navigation, Controller, EffectFade],

            speed: 700,
            slidesPerView:  IS_DESKTOP ? 3.1 : 1,
            spaceBetween: 8,
            loop: IS_DESKTOP,
            loopAdditionalSlides: 20,
            allowTouchMove: false,


            // freeMode: {
            //     enabled: IS_DESKTOP,
            //     sticky: true,
            //   },
        });

        const textSwiper = new Swiper(textSwiperBox, {
            modules: [Navigation, Pagination, Controller, EffectFade],
            speed: 700,
            slidesPerView: 1,
            spaceBetween: 8,
            loop: IS_DESKTOP,
            loopAdditionalSlides: 10,
            allowTouchMove: IS_MOBILE ? true : false,

            effect: IS_MOBILE ? 'slide' : 'fade',
            fadeEffect: {
                crossFade: true,
            },

            controller: {
                control: [imageSwiper]
            },

            navigation: {
                nextEl: el.querySelector('.reviews-next-btn'),
                prevEl: el.querySelector('.reviews-prev-btn')
            },

            pagination: {
                el: el.querySelector('.reviews__pagination'),
                type: 'fraction'
            }
        });
    })
}
