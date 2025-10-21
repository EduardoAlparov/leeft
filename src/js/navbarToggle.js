import gsap from 'gsap';

export default () => {
    const navbars = document.querySelectorAll('.js-navbars');
    if(!navbars[0]) return;
    const section = navbars[0].closest('.cases-section');
    const items = section.querySelectorAll('.cases-section__item');
    const list = items[0].closest('.cases-section__list');


    navbars.forEach((navbar) => {
        navbar.addEventListener('click', (e) => {
            e.preventDefault();

            const btn = e.target.closest('.js-navbar-link');
            if(!btn) return;

            const ELEMENT_CLASS = 'js-navbar-link';
            const ACTIVE_CLASS = 'nameplate--active';
            const activeItem = navbar.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);
            btn.classList.toggle(ACTIVE_CLASS);

            const targetLeft = btn.offsetLeft;
            navbar.scrollLeft = targetLeft - (navbar.clientWidth / 2);

            if(btn.dataset.filter) {
                const dataFilter = btn.dataset.filter;
                const filteredItems = [];


                items.forEach((item) => {
                    item.classList.remove('display-none');

                    const card = item.querySelector(`[data-id="${dataFilter}"]`);

                    if(card) {
                        list.classList.remove('cases-section__list--collapsed');

                        filteredItems.push(item);

                        gsap.timeline({
                            defaults: {
                                delay: 0,
                                duration: 0.6,
                                stagger: 0.3,
                                ease: "power2.out"
                            }
                        }).fromTo(item,
                            {
                                rotateY: -135
                            },
                            {
                                rotateY: 0
                            }
                        )
                    } else {
                        item.classList.add("display-none");
                    }


                    if(filteredItems.length < 1) {
                        list.classList.add('cases-section__list--collapsed');
                        item.classList.remove('display-none');

                        gsap.timeline({
                            defaults: {
                                delay: 0,
                                duration: 0.6,
                                stagger: 0.3,
                                ease: "power2.out"
                            }
                        }).fromTo(item,
                            {
                                rotateY: 135
                            },
                            {
                                rotateY: 0
                            }
                        )
                    }
                })
            }
        })
    })
}
