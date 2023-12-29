function createMobileMenu() {
    const headerTop = document.querySelector('.header__top');
    const triggerButton = document.querySelector('.js-trigger-mobile-menu');
    const mobileMenu = document.querySelector('.js-mobile-menu');
    const menuItems = mobileMenu.querySelectorAll('.header__nav-list-item');

    triggerButton.addEventListener('click',()=> {
        headerTop.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        triggerButton.classList.toggle('open')
    })

    for (let menuItem of menuItems) {
        menuItem.addEventListener('click',()=> {
            headerTop.classList.remove('open');
            mobileMenu.classList.remove('open');
            triggerButton.classList.remove('open')
        })
    }
}

export default createMobileMenu;