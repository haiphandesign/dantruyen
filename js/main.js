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

//uses document because document will be topmost level in bubbling
$(document).on('touchmove', function (e) {
    e.preventDefault();
});
//uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', '.scrollable', function (e) {
    if (e.currentTarget.scrollTop === 0) {
        e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
        e.currentTarget.scrollTop -= 1;
    }
});
//prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', '.scrollable', function (e) {
    e.stopPropagation();
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
    $(".faq-accordion").accordion({
        collapsible: true
    });
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