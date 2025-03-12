import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const accordionBlocks = document.querySelectorAll('.js-accordion');
    const adsSliders = document.querySelectorAll('.js-orv-docs-slider');

    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();

    for (let adsSlider of adsSliders) {
        const items = adsSlider.querySelectorAll('.orv-docs__list-item.swiper-slide').length;


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
});