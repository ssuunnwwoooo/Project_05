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

    // $('.mini_Slide02').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // arrows: false,
    // });
});
