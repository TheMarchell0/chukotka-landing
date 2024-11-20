import createSliders from "./functions/createSliders.js";
import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import {createCookieFunctional} from "./functions/createCookieFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createCookieFunctional();
    createSliders();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();
});