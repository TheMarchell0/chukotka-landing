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
        navigation: {
            nextEl: ".activities__slider-next-arrow",
            prevEl: ".activities__slider-prev-arrow",
        },
        pagination: {
            el: ".activities__slider-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1326: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    const teamSlider = new Swiper(".team__slider", {
        loop: false,
        navigation: {
            nextEl: ".team__slider-next-arrow",
            prevEl: ".team__slider-prev-arrow",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 95,
            }
        }
    });

    const newsSlider = new Swiper(".news__slider-list", {
        loop: false,
        navigation: {
            nextEl: ".news__slider-list-next-arrow",
            prevEl: ".news__slider-list-prev-arrow",
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });

    const newsGlobalSlider = new Swiper(".news-global-slider", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: '120%',
        centeredSlides: true,
        allowTouchMove: false,
        navigation: {
            nextEl: ".modal__news-head-next-arrow",
            prevEl: ".modal__news-head-prev-arrow",
        },
    });

    for (let i = 0; i < newsSliders.length; i++) {
        const sliderClass = `js-news__slider-${i+1}`;
        newsSliders[i].classList.add(sliderClass)
        const newsSliderItem = new Swiper(`.${sliderClass}`, {
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
                el: `${sliderClass} .modal__news-pagination`,
                clickable: true,
            },
            navigation: {
                nextEl: `${sliderClass} #modal__news-slider-next-arrow`,
                prevEl: `${sliderClass} #modal__news-slider-prev-arrow`,
            },
        });
    }
}

export default createSliders;