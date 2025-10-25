export function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

export function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const IS_MOBILE = window.matchMedia('(max-width: 743px)').matches;
export const IS_TABLET = window.matchMedia('(max-width: 1200px)').matches;
export const IS_DESKTOP = window.matchMedia('(min-width: 1200px)').matches;
export const CAN_HOVER = window.matchMedia("(hover: hover)").matches;
