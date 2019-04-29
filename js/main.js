// fixed Header

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#nav").addClass("fixed");
        // $("#nav .logo img").attr("src", "./img/logo-only.svg");
    } else {
        $("#nav").removeClass("fixed");
        // $("#nav .logo img").attr("src", "./img/logo.svg");
    }
});

// game page fixed navigation

$(window).scroll(function () {
    if ($("body").hasClass("page-gamepage")) {
        if ($(this).scrollTop() > 700) {
            var navheight = $('#nav').height();
            $('.game-nav').css('top', navheight);
            // $("#nav .logo img").attr("src", "./img/logo-only.svg");
        } else {
            $('.game-nav').css('top', 0);
            // $("#nav .logo img").attr("src", "./img/logo.svg");
        }
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

// parallax

function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

jQuery(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    jQuery('.game-cover').each(function (index, element) {
        var initY = $(this).offset().top;
        var height = $(this).height();
        var endY = initY + $(this).height();

        // Check if the element is in the viewport.
        var visible = isInViewport(this);
        if (visible) {
            var diff = scrolled - initY;
            var ratio = Math.round(((diff / height) * 100));
            jQuery(this).css('background-position', '50% calc(75% - ' + parseInt(-(ratio)) + 'px)');
        }
    })
});


// game info margin-top

var gameinfoheight = $('.game-info').height();
$('.game-info').css('margin-top', - gameinfoheight / 2);

// header-spacer

var headerspacer = $('#nav').outerHeight(true);
$('.header-spacer').css('height', headerspacer); 
