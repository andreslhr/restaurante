
//Togle

$(document).ready(function () {

    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menu-icon').click(function () {
        $('.side-bar').addClass('active');

    });
    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');

    });

});

