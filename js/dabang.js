$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.main_Slide').slick({
        vertical: false,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });


})