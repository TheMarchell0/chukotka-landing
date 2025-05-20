import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";
import createLoadMoreFunctional from "./functions/createLoadMoreFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createLoadMoreFunctional();
    createCookieFunctional();
    createModalFunctional();
    createFormValidation();
    createMobileMenu();
});