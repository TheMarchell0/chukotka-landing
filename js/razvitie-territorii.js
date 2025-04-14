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
});