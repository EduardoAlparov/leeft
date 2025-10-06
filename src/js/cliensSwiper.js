
import Swiper from 'swiper';
import { Freemode, Autoplay } from 'swiper';

import { IS_TABLET } from './utils';

export default () => {
    const clientsSections = document.querySelectorAll('.js-client-section');

    clientsSections.forEach( (clientsSection) => {
        const swiper = clientsSection.querySelector('.swiper');
        const slidesWrapper = clientsSection.querySelector('.clients-section__swiper-wrapper');
        const slidesInitial = clientsSection.querySelectorAll('.clients-section__swiper-slide');
        const total = clientsSection.querySelector('.js-clients-total');
        const slidsCounter = slidesInitial.length;
        const iteration = 3;

        if(!swiper) return;

        if(total && slidsCounter) {
            total.textContent = slidsCounter;
        }

        new Swiper(swiper, {
            modules: [Autoplay],
            speed: 6000,
            slidesPerView: 6,
            spaceBetween: 8,
            loop: true,
            freemode: true,

            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },

            on: {
                beforeInit: () => {
                    for (let index = 0; index < iteration; index++) {
                        slidesInitial.forEach((item) => {
                            slidesWrapper.append(item);
                        })
                    }
                }
            }
        })
    })
}
