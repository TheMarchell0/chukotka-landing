import createSliders from "./functions/createSliders.js";
import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";

document.addEventListener("DOMContentLoaded", function () {
    createSliders();
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();
});