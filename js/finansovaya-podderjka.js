import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";
import createTimerFunctional from "./functions/createTimerFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const accordionBlocks = document.querySelectorAll('.js-accordion');
    const adsSliders = document.querySelectorAll('.js-ads-slider');
    const supportSliders = document.querySelectorAll('.js-support-slider');
    const countersSliders = document.querySelectorAll('.js-counters-slider');
    const timers = document.querySelectorAll('.js-timer');

    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));
    timers.forEach(timer => createTimerFunctional(timer));
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();

    for (let supportSlider of supportSliders) {
        const items = supportSlider.querySelectorAll('.support__list-item.swiper-slide').length;


        if ((items > 4) || (innerWidth < 1320)) {

            if (!supportSlider.classList.contains('slider')) {
                supportSlider.classList.add('slider');
            }

            const slider = new Swiper(supportSlider, {
                loop: false,
                navigation: {
                    nextEl: supportSlider.querySelector('.support__slider-next-arrow'),
                    prevEl: supportSlider.querySelector('.support__slider-prev-arrow'),
                },
                spaceBetween: 20,
                breakpoints: {
                    320: {
                        slidesPerView: 1.5,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    985: {
                        slidesPerView: 3,
                    },
                    1024: {
                        width: 310,
                    },
                    1400: {
                        slidesPerView: 4,
                    }
                }
            });
        }
    }

    for (let adsSlider of adsSliders) {
        const items = adsSlider.querySelectorAll('.ads__list-item.swiper-slide').length;


        if ((items > 4) || (innerWidth < 1320)) {

            if (!adsSlider.classList.contains('slider')) {
                adsSlider.classList.add('slider');
            }

            const newsSlider = new Swiper(adsSlider, {
                loop: false,
                navigation: {
                    nextEl: adsSlider.querySelector('.ads__next-arrow'),
                    prevEl: adsSlider.querySelector('.ads__prev-arrow'),
                },
                spaceBetween: 20,
                breakpoints: {
                    320: {
                        slidesPerView: 1.5,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    985: {
                        slidesPerView: 3,
                    },
                    1024: {
                        width: 310,
                    },
                    1400: {
                        slidesPerView: 4,
                    }
                }
            });
        }
    }

    for (let countersSlider of countersSliders) {
        const items = countersSlider.querySelectorAll('.counters__list-item.swiper-slide').length;

        if (items > 1) {

            if (!countersSlider.classList.contains('slider')) {
                countersSlider.classList.add('slider');
            }

            const countersSliderBlock = new Swiper(countersSlider, {
                loop: false,
                navigation: {
                    nextEl: countersSlider.querySelector('.counters__next-arrow'),
                    prevEl: countersSlider.querySelector('.counters__prev-arrow'),
                },
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        allowTouchMove: false,
                    },
                }
            });
        }
    }
});