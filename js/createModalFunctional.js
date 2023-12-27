const body = document.body;
let modals; // Ссылки на все модальные окна

export function closeModal(modal) {
    if (modal) {
        modal.classList.replace('modal-anim-open', 'modal-anim-close');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('active', 'modal-anim-close');
            unlockScroll();
        }, { once: true });
    }
}

function lockScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${scrollbarWidth}px`;
    body.classList.add('no-scroll');
}

function unlockScroll() {
    body.style.paddingRight = '';
    body.classList.remove('no-scroll');
}

function createModalFunctional() {
    const triggerButtons = document.querySelectorAll('.js-modal-trigger');
    modals = document.querySelectorAll('.js-modal'); // Получаем все модальные окна

    // Для каждой кнопки-триггера добавляем обработчик событий
    triggerButtons.forEach(triggerButton => {
        triggerButton.addEventListener('click', () => {
            const modalId = triggerButton.getAttribute('data-open-modal'); // Предположим, что есть атрибут указывающий на связанное модальное окно
            const modal = document.querySelector(`#${modalId}`); // Получаем модальное окно связанное с кнопкой

            if (modal) {
                modal.classList.add('active', 'modal-anim-open');
                lockScroll();
                modal.classList.remove('modal-anim-close');
            }
        });
    });

    // Закрытие модальных окон при клике на крестик, для каждого окна свой обработчик
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.js-close-modal');

        closeButton && closeButton.addEventListener('click', () => closeModal(modal));

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    });
}

export default createModalFunctional;
