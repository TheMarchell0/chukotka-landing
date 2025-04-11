function createAccordionFunctional(accordion) {
    const isMultiple = accordion.classList.contains('js-multiple-accordion');
    const accordionItems = accordion.querySelectorAll('.js-accordion-item');

    const toggleAccordionItem = (accordionItem, isActive) => {
        const accordionContent = accordionItem.querySelector('.js-accordion-content');
        if (isActive) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = '0';
            accordionContent.style.margin = '0';
        } else {
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionContent.style.margin = '';
        }
    };

    for (let accordionItem of accordionItems) {
        const accordionHead = accordionItem.querySelector('.js-accordion-head');
        const accordionContent = accordionItem.querySelector('.js-accordion-content');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }

        accordionHead.addEventListener('click', () => {
            const isActive = accordionItem.classList.contains('active');

            if (!isMultiple) {
                accordionItems.forEach((anotherItem) => {
                    toggleAccordionItem(anotherItem, true);
                });
            }

            toggleAccordionItem(accordionItem, isActive);
        });
    }
}

export default createAccordionFunctional;
