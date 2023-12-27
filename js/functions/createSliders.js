function createSliders() {
    const newsSliders = document.querySelectorAll('.news__slider');
    const newsBlocks = document.querySelectorAll('.js-news-open');

    for (let i = 0; i < newsBlocks.length; i++) {
        newsBlocks[i].addEventListener('click', ()=> {
            newsGlobalSlider.slideTo(i);
        })
    }

    const activitiesSlider = new Swiper(".activities__slider", {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".activities__slider-next-arrow",
            prevEl: ".activities__slider-prev-arrow",
        },
    });

    const teamSlider = new Swiper(".team__slider", {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 75,
        navigation: {
            nextEl: ".team__slider-next-arrow",
            prevEl: ".team__slider-prev-arrow",
        },
    });

    const newsGlobalSlider = new Swiper(".news-global-slider", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: '120%',
        centeredSlides: true,
        navigation: {
            nextEl: ".modal__news-head-next-arrow",
            prevEl: ".modal__news-head-prev-arrow",
        },
    });

    for (let i = 0; i < newsSliders.length; i++) {
        const newsSlider = new Swiper(`#js-news__slider-${i+1}`, {
            loop: true,
            disableOnInteraction: true,
            autoplay: {
                delay: 3000,
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".modal__news-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: `#modal__news-slider-next-arrow-${i+1}`,
                prevEl: `#modal__news-slider-prev-arrow-${i+1}`,
            },
        });
    }
}

export default createSliders;