import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createTabsFunctional from "./functions/createTabsFunctional.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');
    const accordionBlocks = document.querySelectorAll('.js-accordion');
    const docsSliders = document.querySelectorAll('.js-orv-docs-slider');

    tabsBlocks.forEach(tabsBlock => createTabsFunctional(tabsBlock));
    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();

    for (let docsSlider of docsSliders) {
        const items = docsSlider.querySelectorAll('.orv-docs__list-item.swiper-slide').length;


        if ((items > 4) || (innerWidth < 1320)) {

            if (!docsSlider.classList.contains('slider')) {
                docsSlider.classList.add('slider');
            }

            const newsSlider = new Swiper(docsSlider, {
                loop: false,
                navigation: {
                    nextEl: docsSlider.querySelector('.orv-docs__next-arrow'),
                    prevEl: docsSlider.querySelector('.orv-docs__prev-arrow'),
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