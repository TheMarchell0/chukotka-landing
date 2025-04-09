import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const accordionBlocks = document.querySelectorAll('.js-accordion');

    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));

    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();
});