function createAccordionFunctional(accordion) {
    const isMultiple = accordion.classList.contains('js-multiple-accordion');
    const accordionItems = accordion.querySelectorAll('.js-accordion-item');

    for (let accordionItem of accordionItems) {
        const accordionHead = accordionItem.querySelector('.js-accordion-head');
        const accordionContent = accordionItem.querySelector('.js-accordion-content');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionItem.scrollHeight + 'px';
        }

        accordionHead.addEventListener('click', () => {
            const isActive = accordionItem.classList.contains('active');

            if (isActive) {
                accordionItem.classList.remove('active');
                accordionContent.style.maxHeight = '0';

            } else {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionItem.scrollHeight + 'px';
            }

            if (!isMultiple) {
                for (let anotherItem of accordionItems) {
                    anotherItem.classList.remove('active');
                    accordionContent.style.maxHeight = '0';
                }
            }
        });
    }
}

export default createAccordionFunctional;
