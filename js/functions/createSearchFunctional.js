function createSearchFunctional() {
    const searchItems = document.querySelectorAll('.js-search-item');
    const searchInput = document.querySelector('.js-search-input');
    const noResultsText = document.querySelector('.js-not-found-text');

    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        let isAnyItemVisible = false;

        searchItems.forEach((searchItem) => {
            const documentsSection = searchItem.closest('.documents-section');
            const nameText = searchItem.querySelector('.js-search-name').textContent.toLowerCase();

            if (nameText.includes(searchText)) {
                searchItem.classList.remove('hidden');
                isAnyItemVisible = true;
            } else {
                searchItem.classList.add('hidden');
            }

            if (documentsSection) {
                const hasVisibleItems = Array.from(documentsSection.querySelectorAll('.js-search-item')).some(
                    item => !item.classList.contains('hidden')
                );
                if (!hasVisibleItems) {
                    documentsSection.classList.add('hidden');
                } else {
                    documentsSection.classList.remove('hidden');
                }
            }
        });

        if (isAnyItemVisible) {
            noResultsText.classList.add('hidden');
        } else {
            noResultsText.classList.remove('hidden');
        }
    });
}

export default createSearchFunctional;
