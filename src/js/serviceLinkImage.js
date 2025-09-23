import { IS_TABLET } from './utils';

export default () => {
    const checkingLink = document.querySelector('.service-link');

    if(!checkingLink | IS_TABLET) return;

    const mouseCoords = (e) => {
		return [ e.pageX, e.pageY ];
    }

    document.addEventListener('mouseover', (e) => {
        if(e.target.closest('.service-link')) {
            const link = e.target.closest('.service-link')
            const dot = link.querySelector('.service-link__image-dot');

            if(!dot) return;

            // dot.style

            link.classList.add('service-link--hover');

            link.addEventListener('mousemove', e => {
                dot.style.left = mouseCoords(e)[0] + 'px';
                dot.style.top = mouseCoords(e)[1] + 'px';
            })

            link.addEventListener('mouseleave', () => {
                link.classList.remove('service-link--hover');
            })
        }
    })
}
