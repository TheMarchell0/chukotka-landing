function createAccordionFunctional(accordion) {
    const accordionItems = accordion.querySelectorAll('.js-accordion-item');

    for (let accordionItem of accordionItems) {
        accordionItem.addEventListener('click', () => {

            const isActive = accordionItem.classList.contains('active');

            for (let anotherItem of accordionItems) {
                anotherItem.classList.remove('active');
                anotherItem.style.maxHeight = '0';
            }

            if (!isActive) {
                accordionItem.classList.add('active');
                accordionItem.style.maxHeight = accordionItem.scrollHeight + 'px';
            }
        });
    }
}

export default createAccordionFunctional;