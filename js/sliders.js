document.addEventListener("DOMContentLoaded", function () {
    import { Swiper } from "../libs/swiper/swiper.bundle.min.js";
    /* СЛАЙДЕРЫ
     ========================================================================== */

    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper(".swiper", {
        loop: true,
        allowTouchMove: false,
        spaceBetween: 10,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
        },
    });

    /* ========================================================================== */
});