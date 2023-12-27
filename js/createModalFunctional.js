const body = document.body;
let modal;

export function closeModal() {
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
    modal = document.querySelector('.js-modal');
    const closeButton = document.querySelector('.js-close-modal');

    for (let triggerButton of triggerButtons) {
        triggerButton.addEventListener('click', () => {
            modal.classList.add('active', 'modal-anim-open');
            lockScroll();
            modal.classList.remove('modal-anim-close');
        });
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

export default createModalFunctional;
