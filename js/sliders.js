import SwiperBundle from '../libs/swiper/swiper-bundle.min.js';

function createSliders() {
    const activitiesSlider = new SwiperBundle.Swiper(".activities__slider", {
        spaceBetween: 20,
        navigation: {
            nextEl: ".activities__slider-next-arrow",
            prevEl: ".activities__slider-prev-arrow",
        },
    });
}

export default createSliders;