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