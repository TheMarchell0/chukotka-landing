import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";
import createFAQBlockFunctional from "./functions/createFAQBlockFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createFAQBlockFunctional();
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();

    const projectsSlider = new Swiper(".projects__slider", {
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: ".projects__slider-next-arrow",
            prevEl: ".projects__slider-prev-arrow",
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            767: {
                slidesPerView: 1.3,
            },
            1025: {
                slidesPerView: 1,
                widthPercent: 100,
            }
        }
    });
});