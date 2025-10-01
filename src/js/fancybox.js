import { Fancybox, Carousel,  } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        whell: "slide",
    });
}
