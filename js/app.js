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
		// $(".game--info-bottom").addClass("is-fixed");
		// $("#nav .logo img").attr("src", "./img/logo-only.svg");
	} else {
		$("#nav").removeClass("is-fixed");
		// $(".game--info-bottom").removeClass("is-fixed");
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


// Global: Hide Navbar

$(document).ready(function () {
	'use strict';
	var c,
		currentScrollTop = 0,
		navbar = $('#nav'),
		gameprogressbar = $('.game--progress');

	$(window).scroll(function () {
		var a = $(window).scrollTop();
		var b = navbar.height();

		currentScrollTop = a;

		if (c < currentScrollTop && a > b + b) {
			navbar.addClass("is-scrolled");
			gameprogressbar.addClass("is-scrolled");
			$('.game--sidebar-wrapper').addClass("is-scrolled");
			$('.nav--user').removeClass('is-active');
		} else if (c > currentScrollTop && !(a <= b)) {
			navbar.removeClass("is-scrolled");
			gameprogressbar.removeClass("is-scrolled");
			$('.game--sidebar-wrapper').removeClass("is-scrolled");
		}
		c = currentScrollTop;
	});

});


// Global: Navbar User Menu


window.setTimeout(function () {
	$('.nav--user').click(function () {
		console.log('open user menu');
		$(this).toggleClass('is-active');
	})
}, 100);


window.setTimeout(function () {
	$('.nav--user').addClass('is-active');
}, 100);


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

$('.stack-reveal').click(function () {
	$(this).parent().toggleClass('is-active');
})

$(window).resize(function () {
	gameInfoMargin();
});

$(document).ready(function () {
	gameInfoMargin();
});

function gameInfoMargin() {
	if ($(window).width() < 992) {
		$('.game--header .game--info').css('margin-top', '-10vh');
	} else {
		var gameinfoheight = $('.game--header .game--info').height();
		$('.game--header .game--info').css('margin-top', -gameinfoheight / 2);
	}
}


// Game: Generate Challenge Result

$('.challenge-result').each(function () {
	if ($(this).hasClass('good')) {
		$(this).prepend('<p>Kết quả: <span class="result"><i class="far fa-smile"></i> Mạnh</span>.</p>');
	} else if ($(this).hasClass('bad')) {
		$(this).prepend('<p>Kết quả: <span class="result"><i class="far fa-frown"></i> Yếu</span>.</p>');
	} else {
		$(this).prepend('<p>Kết quả: <span class="result"><i class="far fa-meh"></i> Không xác định</span>.</p>');
	}
});

// Game: Interraction

$('.interaction').load('./inc/game--interaction.html');

// Game: Show Comment Form

setTimeout(function () {
	$('.interaction .comment').click(function () {
		$(this).parent().parent().siblings('.discussion').toggleClass('is-active');
		return false;
	});
}, 100);

// Game: Join/ Follow Button

$('.game--info-middle a').click(function () {
	$(this).toggleClass('is-active');
	$(this).toggleClass('full');
	$(this).toggleClass('ghost');
	$(this).children('i').toggleClass('fa-plus');
	$(this).children('i').toggleClass('fa-check');
})


// Gme: Toggle Vote

$('.title .vote a').click(function () {
	$(this).parent().children('a').removeClass('is-selected');
	$(this).toggleClass('is-selected');
})


// Game: Sidebar

$('.game--progress-tree').load('./inc/game--progress-tree.html');
$('.game--location').load('./inc/game--location.html');
$('.game--rules').load('./inc/game--rules.html');
$('.game--members').load('./inc/game--members.html');
$('.game--action').load('./inc/game--action.html');
$('.game--information').load('./inc/game--info.html');

setTimeout(function () {
	$('.game--members-mini').load('./inc/game--members-mini.html');
}, 100);


//// Game: Sidebar Widget Collapse

setTimeout(function () {
	$('.game--sidebar .ui-widget .title').click(function () {
		$(this).siblings('.content').slideToggle('slow');
	})
}, 100);

//// Game: Game Progress Tree


// Game: Progress Bar

//// Game: List Button

$('.game--progress .game--progress-navigation .list').click(function () {
	$('.game--progress-list').toggleClass('is-active');
});

$(window).scroll(function () {
	if ($('.game--progress').hasClass('is-scrolled')) {
		$('.game--progress-list').removeClass('is-active');
	}
});

setTimeout(function () {
	$('#game-narrator-modal').modal();
	return false;
}, 100);
