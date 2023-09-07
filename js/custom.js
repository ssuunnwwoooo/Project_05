$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.main_Slide').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.main_Visual .arrows .up').on('click', function () {
        $('.main_Slide').slick('slickPrev')
    });
    $('.main_Visual .arrows .down').on('click', function () {
        $('.main_Slide').slick('slickNext')
    });


    $('.mini_Slide01').slick({
        vertical: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
    });

    const miniSlide = new Swiper('.mini_Slide02', {
        centeredSlides: true,
        loop: true,
        parallax: true,
        roundLengths: true,
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    $('.main_Event .mini_Arrows .left').on('click', function () {
        miniSlide.slidePrev();
    });
    $('.main_Event .mini_Arrows .right').on('click', function () {
        miniSlide.slideNext();
    });


    $('.con_slide').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const mediaSlide = new Swiper('.media_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 1,
        autoplay: {
            delay: 2500,
        },

    });

    $('.media_slide').on('mouseenter', function (e) {
        console.log('stop autoplay');
        mediaSlide.autoplay.pause();
    })
    $('.media_slide').on('mouseleave', function (e) {
        console.log('start autoplay');
        mediaSlide.autoplay.start();
    });


    const $counter = document.querySelector('.naver');
    const $coun_ter = document.querySelector('.insta');
    const $counter_ = document.querySelector('.face');

    const max = 123030;
    const _max = 7497;
    const max_ = 98000;

    counter($counter, max);
    counter($coun_ter, _max);
    counter($counter_, max_);

    function counter($counter, max) {
        let now = max;

        const handle = setInterval(() => {
            $counter.innerHTML = Math.ceil(max - now);

            if (now < 1) {
                clearInterval(handle);
            }
            const step = now / 10;

            now -= step;
        }, 50);
    }

    const step = now / 10;

    now -= step;


    $('.m_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

});
