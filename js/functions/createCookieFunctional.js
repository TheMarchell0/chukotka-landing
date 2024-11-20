export function createCookieFunctional() {
    const cookieBlock = document.querySelector('.js-cookie');
    const acceptButtons = document.querySelectorAll('.js-accept-cookie');

    if (!getCookie('personalDataAgreement')) {
        cookieBlock.classList.remove('hidden');
    }

    for (let acceptButton of acceptButtons) {
        acceptButton.addEventListener('click', function () {
            setCookie('personalDataAgreement', 'true', 365);
            cookieBlock.classList.add('hidden');
        });
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
