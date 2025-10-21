import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function setScrollbarWidth() {
    const setWidth = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.documentElement.style.setProperty('--sb-width', scrollbarWidth + "px");

        ScrollTrigger.refresh();
    }

    setWidth();

    window.addEventListener('resize', setWidth);
}
