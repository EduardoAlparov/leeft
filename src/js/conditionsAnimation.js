import { IS_DESKTOP } from './utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default () => {
    const items = document.querySelectorAll('.js-cond-animation-item');

    if(!items.length | !IS_DESKTOP) return;

    const title = document.querySelector('.js-cond-animation-title');
    const wrapper = items[0].parentElement;
    const trigger = wrapper.closest('.js-cond-animation-trigger');



    const tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger : trigger,
                start: "center center",
                fastScrollEnd: true,
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
                // markers: true,
            },
            defaults: {
                duration: 0.5,
                stagger: 1,
                ease: "power2.out"
            },
        }
    );


    items.forEach( (item, index) => {
        if(index == 0) {
            tl.fromTo(item, { xPercent: -100}, { xPercent: 0})
                .fromTo(title, { xPercent: -80}, { xPercent: 0}, 0)
        } else {
            tl.fromTo(item, { xPercent: -100}, { xPercent: 0})
        }
    });
}
