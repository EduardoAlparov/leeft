import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const burgers = document.querySelectorAll('.page-header__burger');
    const menu = document.querySelector('.page-header__mobile-menu');

    window.menuOpen = false;

    if (!menu) return;

    const openMenu = () => {
        if (window.menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        window.menuOpen = true;
    };

    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        window.menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    burgers.forEach((burger, index) => {

        burger.addEventListener('click', event => {
            event.preventDefault();

            menu.classList.toggle("mobile-menu--light", index);

            if (!window.menuOpen) {
                console.log(index);
                openMenu();
            } else {
                closeMenu();
            }
        });
    })
}
