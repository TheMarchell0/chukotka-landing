import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();
});