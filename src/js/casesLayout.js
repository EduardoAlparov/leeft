import Isotope from "isotope-layout"

export default () => {
    const layout = document.querySelector('.js-iso-grid');

    if(!layout) return;

    const iso = new Isotope('.js-iso-grid', {
        itemSelector: ".cases-section__item",
        layoutMode: "cellsByRow",
        cellsByRow: {
            columnWidth: 212,
            rowHeight: 372
        }
    })
}
