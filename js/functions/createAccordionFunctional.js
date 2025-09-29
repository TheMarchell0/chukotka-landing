function createAccordionFunctional(accordion) {
    const isMultiple = accordion.classList.contains('js-multiple-accordion');
    const accordionItems = Array.from(accordion.children).filter(child => child.classList.contains('js-accordion-item'));

    const toggleAccordionItem = (accordionItem, isActive) => {
        const accordionContent = accordionItem.querySelector('.js-accordion-content');
        const hasNested = accordionContent.querySelector('.js-accordion');

        if (isActive) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = '0';
            accordionContent.style.margin = '0';
        } else {
            accordionItem.classList.add('active');
            if (hasNested) {
                accordionContent.style.maxHeight = 'none';
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
            accordionContent.style.margin = '';
        }
    };

    for (let accordionItem of accordionItems) {
        const accordionHead = accordionItem.querySelector('.js-accordion-head');
        const accordionContent = accordionItem.querySelector('.js-accordion-content');

        if (accordionItem.classList.contains('active')) {
            const hasNested = accordionContent.querySelector('.js-accordion');
            if (hasNested) {
                accordionContent.style.maxHeight = 'none';
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
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
