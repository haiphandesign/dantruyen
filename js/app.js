//  ________  ___       ________  ________  ________  ___          
// |\   ____\|\  \     |\   __  \|\   __  \|\   __  \|\  \         
// \ \  \___|\ \  \    \ \  \|\  \ \  \|\ /\ \  \|\  \ \  \        
//  \ \  \  __\ \  \    \ \  \\\  \ \   __  \ \   __  \ \  \       
//   \ \  \|\  \ \  \____\ \  \\\  \ \  \|\  \ \  \ \  \ \  \____  
//    \ \_______\ \_______\ \_______\ \_______\ \__\ \__\ \_______\
//     \|_______|\|_______|\|_______|\|_______|\|__|\|__|\|_______|



// Global: Load Page Header & Footer

$('#header').load('./inc/header.html');
$('#footer').load('./inc/footer.html');


// Global: Fixed Header

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$("#nav").addClass("is-fixed");
		// $("#nav .logo img").attr("src", "./img/logo-only.svg");
	} else {
		$("#nav").removeClass("is-fixed");
		// $("#nav .logo img").attr("src", "./img/logo.svg");
	}
});


// Global: Header Spacer

function headerspacing() {
	headerspacer = $('#nav').outerHeight(true);
	// alert(headerspacer);
	$('.header-spacer').css('height', headerspacer);
};
window.setTimeout(headerspacing, 100);



//  ________  ________  _____ ______   _______      
// |\   ____\|\   __  \|\   _ \  _   \|\  ___ \     
// \ \  \___|\ \  \|\  \ \  \\\__\ \  \ \   __/|    
//  \ \  \  __\ \   __  \ \  \\|__| \  \ \  \_|/__  
//   \ \  \|\  \ \  \ \  \ \  \    \ \  \ \  \_|\ \ 
//    \ \_______\ \__\ \__\ \__\    \ \__\ \_______\
//     \|_______|\|__|\|__|\|__|     \|__|\|_______|



// Game: Parallax

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

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();
	$('.game--cover').each(function (index, element) {
		var initY = $(this).offset().top;
		var height = $(this).height();
		var endY = initY + $(this).height();

		// Check if the element is in the viewport.
		var visible = isInViewport(this);
		if (visible) {
			var diff = scrolled - initY;
			var ratio = Math.round(((diff / height) * 100));
			$(this).css('background-position', '50% calc(75% - ' + parseInt(-(ratio)) + 'px)');
		}
	})
});


// Game: Info Top Margin

var gameinfoheight = $('.game--header .game--info').height();
$('.game--header .game--info').css('margin-top', - gameinfoheight / 2);

function stackReveal() {
	$('.stack-used').toggleClass('is-active');
}


// Game: Show Comment Form

$('.scene .interraction .comment').click(function () {
	$(this).parent().parent().siblings('.discussion').children('.comment-form').toggleClass('is-active');
	return false;
});

$('.reply .interraction .comment').click(function () {
	$(this).parent().parent().siblings('.discussion').toggleClass('is-active');
	return false;
});



// Game: Join/ Follow Button

$('.game--info-middle a').click(function () {
	var joinfollowbuttonsrc = $(this).children('img').attr('src');

	if (joinfollowbuttonsrc == './img/layout/icons/plus.svg') {
		$(this).children('img').attr('src', './img/layout/icons/check.svg');
	} else {
		$(this).children('img').attr('src', './img/layout/icons/plus.svg');
	}

	if ($(this).hasClass('join')) {
		if ($(this).children('span').text() == 'Tham gia') {
			$(this).children('span').text('Đã tham gia');
		} else {
			$(this).children('span').text('Tham gia');
		}
	} else {
		if ($(this).children('span').text() == 'Theo dõi') {
			$(this).children('span').text('Đang theo dõi');
		} else {
			$(this).children('span').text('Theo dõi');
		}
	}
});
