import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default () => {
    const introTrigger =  document.querySelector('.js-intro-trigger');

    if(introTrigger)  {
        const items = document.querySelectorAll('.js-hero-item');

        const tHero = gsap.timeline(
            {
                defaults: {
                    duration: 0.6,
                    ease: "power2.out"
                },
            }
        );

        items.forEach((item) => {
            tHero.fromTo(item,
                {
                    yPercent: 30,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1
                }
            )
        })
    };

    const blueTrigger = document.querySelector('.js-blue-trigger');

    if(blueTrigger) {
        const tBlueLine = gsap.timeline(
            {
                scrollTrigger: {
                    trigger : blueTrigger,
                    start: "bottom bottom",
                    end: "bottom center",
                    fastScrollEnd: true,
                    scrub: 1.5,
                    pin: false,
                    once: true,
                },
                defaults: {
                    duration: 0.5,
                    stagger: 0.3,
                    ease: "power2.out",

                },
            }
        );

        tBlueLine.fromTo('.js-cover',
            {
                scaleX: 0
            },
            {
                scaleX: 1
            }
        )
    }

    const tableRows = document.querySelectorAll('.js-table-triger');

    tableRows.forEach( (row) => {
        gsap.timeline(
            {
                scrollTrigger: {
                    trigger : row,
                    start: "top center+=35%",
                    end: "top center-=0%",
                    scrub: 1.5,
                    once: true,
                },
                defaults: {
                    duration: 0.5,
                    stagger: 0.3,
                    ease: "power2.out"
                },
            }
        ).fromTo(row,
            {
                yPercent: 50,
                opacity: 0
            },
            {
                yPercent: 0,
                opacity: 1
            }
        )
    })

    const competencesTrigger = document.querySelector('.js-competences-trigger');

    if(competencesTrigger) {
        gsap.timeline(
            {
                scrollTrigger: {
                    trigger : competencesTrigger,
                    start: "top center-=5%",
                    scrub: 1,
                    once: true,
                    onEnter: () => {
                        const competenceItems = competencesTrigger.querySelectorAll('.competence-section__link.multi-link');
                        competenceItems.forEach((item) => {
                            item.classList.remove('multi-link--hover');
                        })
                    },
                }
            }
        )
    }

    const tarriffsTrigger = document.querySelector('.js-tarriffs-trigger');

    if(tarriffsTrigger) {
        gsap.utils.toArray('.js-tarriffs-item').forEach((item, index) => {
            gsap.timeline({
                defaults: {
                    delay: (index / 2),
                    duration: 0.5
                },
                scrollTrigger: {
                  trigger: item,
                  start: 'top 50%',
                  once: true
                }
            }).fromTo(item,
                {
                    xPercent: 50,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                }
            )
        })
    }

    const casesTrigger = document.querySelector('.js-cases-trigger');

    if(casesTrigger) {
        gsap.utils.toArray('.cases-section__item').forEach((item, index) => {
            gsap.timeline({
                defaults: {
                    delay: (index / 4),
                    duration: 0.5
                },
                scrollTrigger: {
                  trigger: item.parentElement,
                  start: 'top center+=10%',
                  once: true,
                }
            }).fromTo(item,
                {
                    rotateY: 90
                },
                {
                    rotateY: 0
                }
            )
        })
    }
}
