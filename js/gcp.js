import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createTabsFunctional from "./functions/createTabsFunctional.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');
    const infoSliders = document.querySelectorAll('.js-info-slider');

    tabsBlocks.forEach(tabsBlock => createTabsFunctional(tabsBlock));
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();

    for (let infoSlider of infoSliders) {
        const items = infoSlider.querySelectorAll('.info__list-item.swiper-slide').length;


        if ((items > 4) || (innerWidth < 1320)) {

            if (!infoSlider.classList.contains('slider')) {
                infoSlider.classList.add('slider');
            }

            const newsSlider = new Swiper(infoSlider, {
                loop: false,
                navigation: {
                    nextEl: infoSlider.querySelector('.info__next-arrow'),
                    prevEl: infoSlider.querySelector('.info__prev-arrow'),
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