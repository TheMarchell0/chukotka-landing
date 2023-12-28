import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createSearchFunctional from "./functions/createSearchFunctional.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";

document.addEventListener("DOMContentLoaded", function () {
    createModalFunctional();
    createFormValidation();
    createSearchFunctional();
    createAnchorsFunctional();
    createMobileMenu();
});