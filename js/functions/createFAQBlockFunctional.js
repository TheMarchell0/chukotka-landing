import createTabsFunctional from "./createTabsFunctional.js";
import createAccordionFunctional from "./createAccordionFunctional.js";

function createFAQBlockFunctional() {
    const faqBlocks = document.querySelectorAll('.js-faq');

    for (let faqBlock of faqBlocks) {
        const faqBlockItems = faqBlock.querySelectorAll('.js-faq-item');

        if (innerWidth >= 1024) {
            faqBlock.classList.add('js-tabs-block');
        } else {
            faqBlock.classList.add('accordion-wrapper', 'js-accordion');
        }

        for (let i = 0; i < faqBlockItems.length; i++) {
            const head = faqBlockItems[i].querySelector('.js-faq-item-head'),
                content = faqBlockItems[i].querySelector('.js-faq-item-content');

            if (innerWidth >= 1024) {
                if (faqBlockItems[i].classList.contains('active')) {
                    faqBlockItems[i].classList.remove('active');
                }

                head.classList.add('js-tab');
                head.setAttribute('data-open-to', `answer-${i+1}`);

                content.classList.add('js-tabs-content');
                content.setAttribute('data-tab', `answer-${i+1}`);

            } else {
                for (let faqBlockItem of faqBlockItems) {
                    faqBlockItems[i].classList.add('js-accordion-item', 'accordion');

                    head.classList.add('accordion-head', 'js-accordion-head');
                    if (head.classList.contains('active')) {
                        head.classList.remove('active');
                    }

                    content.classList.add('accordion-content', 'js-accordion-content');
                    if (content.classList.contains('active')) {
                        content.classList.remove('active');
                    }
                }
            }
        }

        if (innerWidth >= 1024) {
            createTabsFunctional(faqBlock);
        } else {
            createAccordionFunctional(faqBlock);
        }
    }
}

export default createFAQBlockFunctional;