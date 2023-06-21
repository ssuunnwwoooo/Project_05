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

    // $('.mobile_btn').on('click', function () {
    //     $(this).toggleClass('on');
    //     $('.gnb').toggleClass('on');
    //     $('.h1').toggleClass('on');
    // });


});
