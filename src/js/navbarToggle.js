export default () => {
    const navbars = document.querySelectorAll('.js-navbars');

    navbars.forEach((navbar) => {
        navbar.addEventListener('click', (e) => {
            e.preventDefault();

            const btn = e.target.closest('.js-navbar-link');
            const ELEMENT_CLASS = 'js-navbar-link';
            const ACTIVE_CLASS = 'nameplate--active';
            const activeItem = navbar.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);
            btn.classList.toggle(ACTIVE_CLASS);

            const targetLeft = btn.offsetLeft;
            navbar.scrollLeft = targetLeft - (navbar.clientWidth / 2);
        })
    })
}
