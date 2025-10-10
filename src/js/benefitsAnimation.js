import gsap from 'gsap';
import { CAN_HOVER } from './utils'

export default () => {
    const canHover = CAN_HOVER;

    if(!canHover) return;

    const targetBoxs = document.querySelectorAll('.js-benefits-box');
    const rotationAmplitude = 12;

    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const tl = gsap.timeline();



    targetBoxs.forEach( (targetBox) => {
        const nameplates = targetBox.querySelectorAll('[data-benefit]');
        if(!nameplates[0]) return;

        const container = nameplates[0].parentElement;
        const clones = [];
        let canCreate = true;

        nameplates.forEach((nameplate) => {
            clones.push(nameplate.cloneNode(true));
            nameplate.remove();
        })

        targetBox.addEventListener('mousemove', (e) => {
            if (!canCreate || e.target.closest('.benefits-section__nameplate')) return;
            canCreate = false;

            const tag = clones[randomInteger(0, (clones.length - 1))].cloneNode(true);

            tag.style.left = `${e.layerX}px`;
            tag.style.top = `${e.layerY}px`;

            container.append(tag);

            setTimeout(() => {
                // tag.classList.add('animate')
                gsap.to(tag, {
                    opacity: 1,
                    duration: .15
                });
                gsap.to(tag, {
                    force3D: !0,
                    scale: 1,
                    rotation: Math.random() * rotationAmplitude - rotationAmplitude / 2,
                    duration: .25
                });
                gsap.to(tag, {
                    force3D: !0,
                    scale: 1.1,
                    duration: 1
                });
            }, 100);


            setTimeout(() => {
                canCreate = true;
            }, 200);

            setTimeout(() => {
                gsap.to(tag, {
                    force3D: !0,
                    scale: .8,
                    rotation: Math.random() * rotationAmplitude - rotationAmplitude / 2,
                    opacity: 0,
                    duration: .3,
                    ease: "power2.in"
                });
            }, 2000);

            setTimeout(() => {
                tag.remove();
            }, 3000);
        })
    })

}
