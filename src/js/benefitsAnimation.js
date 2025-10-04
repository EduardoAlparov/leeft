import gsap from 'gsap';

export default () => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    const targetBoxs = document.querySelectorAll('.js-benefits-box');

    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    if(!canHover) return;

    targetBoxs.forEach( (targetBox) => {
        const nameplates = targetBox.querySelectorAll('[data-benefit]');
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
                tag.classList.add('animate')
            }, 100);


            setTimeout(() => {
                canCreate = true;
            }, 200);

            setTimeout(() => {
                tag.classList.add('hidden');
            }, 2000);

            setTimeout(() => {
                tag.remove();
            }, 3000);
        })
    })

}
