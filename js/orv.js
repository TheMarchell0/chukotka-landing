import createModalFunctional from "./functions/createModalFunctional.js";
import createFormValidation from "./functions/createFormValidation.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import createMobileMenu from "./functions/createMobileMenu.js";
import createTabsFunctional from "./functions/createTabsFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');

    tabsBlocks.forEach(tabsBlock => createTabsFunctional(tabsBlock));
    createModalFunctional();
    createFormValidation();
    createAnchorsFunctional();
    createMobileMenu();
});