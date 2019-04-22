// Fixed Header

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#nav").addClass("fixed");
        // $("#nav .logo img").attr("src", "./img/logo-only.svg");
    } else {
        $("#nav").removeClass("fixed");
        // $("#nav .logo img").attr("src", "./img/logo.svg");
    }
});


// Transform Hamburgers Menu

$(".mobile-menu-toggle").click(function () {
    $(".mobile-menu-toggle").toggleClass("is-active");
});


// external js: flickity.pkgd.js

$('.game-carousel').flickity({
    contain: true,
    wrapAround: true,
    pageDots: false
});

$(function () {
    $(".faq-accordion").accordion();
});

$(document).ready(function () {
    $('ul.roles-tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.roles-tabs li').removeClass('current');
        $('.roles-tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})