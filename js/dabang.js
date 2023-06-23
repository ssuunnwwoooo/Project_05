$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.main_Slide').slick({
        // vertical: true,
        // verticalSwiping: true,
        arrows: false,
        dots: false,
        // speed: 1000,
        fade: true,
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

        loop: true,
        parallax: true,
    });

    $('.main_Event .mini_Arrows .left').on('click', function () {
        miniSlide.slidePrev();
    });
    $('.main_Event .mini_Arrows .right').on('click', function () {
        miniSlide.slideNext();
    });

    $('.mini_Slide03').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    $('.main_Event .tin_arrows .up').on('click', function () {
        $('.mini_Slide03').slick('slickPrev')
    });
    $('.main_Event .tin_arrows .down').on('click', function () {
        $('.mini_Slide03').slick('slickNext')
    });

    $('.mini_Slide06').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    $('.main_Event .tin_Arrows .up').on('click', function () {
        $('.mini_Slide06').slick('slickPrev')
    });
    $('.main_Event .tin_Arrows .down').on('click', function () {
        $('.mini_Slide06').slick('slickNext')
    });

    const mediaSlide = new Swiper('.media_slide', {
        loop: true,
        //parallax: true,
        slidesPerView: 3,
        spaceBetween: 1,
        //autoplayDisableOnInteraction: true,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: true,
            // pauseOnMouseEnter: true,
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


});
