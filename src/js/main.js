import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import fancybox from './fancybox';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';

import {cursorControl} from './cursor';
import setHeaderPadding from './setHeaderPadding';
import video from './video';

import navbarToggle from './navbarToggle';
import serviceLinkImage from './serviceLinkImage';

import reviewsSectionSwipers from './reviewsSectionSwipers';
import midnight from './midnight';

import menu from './menu';
import benefitsAnimation from './benefitsAnimation';
import cliensSwiper from './cliensSwiper';
import conditionsAnimation from './conditionsAnimation';
import casesLayout from './casesLayout';
import map from './map';
import animations from './animations';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    fancybox();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    video();

    cursorControl();
    setHeaderPadding();

    navbarToggle();
    serviceLinkImage();
    reviewsSectionSwipers();
    midnight();

    menu();
    benefitsAnimation();
    cliensSwiper();
    conditionsAnimation();
    casesLayout();
    map();
    animations();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
