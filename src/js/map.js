import { CAN_HOVER } from './utils'

export default () => {
    const mapBox = document.getElementById('yamap-box');
    const canHover = CAN_HOVER;

    if(!mapBox) return;

    ymaps.ready(() => {
        // Your code that uses ymaps3 goes here
        const map = new ymaps.Map(mapBox, {
            // Координаты центра карты
            center: [64.540595, 40.560687],

            // Уровень масштабирования
            zoom: 14
        });

        const MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
            '<svg width="198" height="25" aria-hidden="true" class="placemark">',
                '<use xlink:href="#pin"></use>',
            '</svg>',
        ].join(''));

        const placemark = new ymaps.Placemark(
            [64.540595, 40.560687],
            {},
            {
                iconLayout: MainMarkerLayout,
                iconShape: {
                    type: 'Circle',
                    coordinates: [0, 0],
                    radius: 50
                },
                iconImageOffset: window.matchMedia("(max-width: 640px)").matches ? [-50, -150] : [-50, -150],
            }
        );

        if (!canHover) {
            map.behaviors.disable('drag');
            map.behaviors.enable('MultiTouch');
        }

        map.geoObjects.add(placemark);
    });
}
