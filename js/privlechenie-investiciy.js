import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";
import createFAQBlockFunctional from "./functions/createFAQBlockFunctional.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const accordionBlocks = document.querySelectorAll('.js-accordion');

    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));

    createFAQBlockFunctional();
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();
});