import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";
import createTabsFunctional from "./functions/createTabsFunctional.js";
import createAccordionFunctional from "./functions/createAccordionFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');
    const accordionBlocks = document.querySelectorAll('.js-accordion');

    tabsBlocks.forEach(tabsBlock => createTabsFunctional(tabsBlock));
    accordionBlocks.forEach(accordionBlock => createAccordionFunctional(accordionBlock));

    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();
});