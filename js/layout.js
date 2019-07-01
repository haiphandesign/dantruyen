// ON READY

sidebarIsSticky();


// ON SCROLL

var scrollPos = 0;

window.addEventListener('scroll', function () {
	sidebarStickySpacer();
	scrollPos = (document.body.getBoundingClientRect()).top;
});


// CONTENT BLOCK -- TITLE -- DROPDOWN MENU

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('dropdown-button')) {
		e.target.parentNode.classList.toggle('is-active');
	}
}, false);


// CONTENT BLOCK -- COLLAPSIBLE

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('title') && e.target.parentNode.classList.contains('content-block')) {
		e.target.parentNode.classList.toggle('content-toggle');
	}
}, false);


// SIDEBAR: STICKY

function sidebarIsSticky() {
	sidebarCount = document.getElementsByClassName('sidebar').length;
	for (var i = 0; i < sidebarCount; i++) {
		if (document.getElementsByClassName('sidebar')[i].classList.contains('is-sticky')) {
			var sidebarOldContent = document.getElementsByClassName('sidebar')[i].innerHTML;
			var sidebarNewContent = '<div class="sidebar-inner">' + document.getElementsByClassName('sidebar')[i].innerHTML + '</div>';
			document.getElementsByClassName('sidebar')[i].innerHTML = sidebarNewContent;
		}
	}
};

function outerHeight(el) {
	var height = el.offsetHeight;
	var style = getComputedStyle(el);

	height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	return height;
}

function sidebarStickySpacer() {
	var navHeight = outerHeight(document.getElementById('nav')) + 15;
	var navHeightPx = navHeight + 'px';
	for (var i = 0; i < sidebarCount; i++) {
		if (document.getElementsByClassName('sidebar')[i].classList.contains('is-sticky') && document.getElementsByClassName('sidebar')[0].getBoundingClientRect().top < 0) {
			document.getElementsByClassName('sidebar')[i].children[0].style.paddingTop = navHeightPx;
		} else {
			document.getElementsByClassName('sidebar')[i].children[0].style.paddingTop = '0';
		}
	}
};
