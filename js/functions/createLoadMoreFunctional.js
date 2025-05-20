function createLoadMoreFunctional() {
    const loadMoreBlocks = document.querySelectorAll('.js-load-more');

    for (let loadMoreBlock of loadMoreBlocks) {
        const list = loadMoreBlock.querySelector('.js-load-more-list'),
            initialShow = list.getAttribute('data-initial-show'),
            /*itemsPerStep = list.getAttribute('data-items-per-step'), Добавить на случай появления подобного блока, но с постепенным раскрытием по несколько блоков, а не сразу все*/
            items = list.querySelectorAll('.js-load-more-list-item'),
            button = loadMoreBlock.querySelector('.js-load-more-button'),
            buttonInitialText = button.innerHTML,
            buttonExpandText = button.getAttribute('data-expand-text'),
            loadMoreBlockPosition = loadMoreBlock.getBoundingClientRect().top + window.scrollY-20;

        for (let i = 0; i < initialShow; i++) {
            items[i].classList.add('active');
        }

        button.addEventListener('click', () => {
            button.classList.toggle('expand');

            if (button.classList.contains('expand')) {
                button.innerHTML = buttonExpandText;

                for (let i = initialShow; i < items.length; i++) {
                    items[i].classList.add('active');
                }
            } else {
                button.innerHTML = buttonInitialText;

                for (let i = items.length - 1; i >= initialShow; i--) {
                    items[i].classList.remove('active');
                }

                window.scrollTo({
                    top: loadMoreBlockPosition,
                });
            }
        });
    }
}

export default createLoadMoreFunctional;