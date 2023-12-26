function createSliders() {
    const activitiesSlider = new Swiper(".activities__slider", {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".activities__slider-next-arrow",
            prevEl: ".activities__slider-prev-arrow",
        },
    });
}

export default createSliders;