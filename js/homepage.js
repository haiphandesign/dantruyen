var queryDict = {}
location.search.substr(1).split("&").forEach(function (item) {
	queryDict[item.split("=")[0]] = item.split("=")[1]
})

document.getElementById("name").innerHTML = queryDict.name.split('+').join(' ');

$('.role-toggle-host').click(function () {
	$('.role-toggle a').removeClass('is-active');
	$(this).addClass('is-active');
	$('.role-card.role-host').show();
	$('.role-card.role-player').hide();
});

$('.role-toggle-player').click(function () {
	$('.role-toggle a').removeClass('is-active');
	$(this).addClass('is-active');
	$('.role-card.role-player').show();
	$('.role-card.role-host').hide();
});

$('.faq-title').click(function () {
	if ($(this).parent().hasClass('is-active')) {
		$('.faq-item').removeClass('is-active');
	} else {
		$('.faq-item').removeClass('is-active');
		$(this).parent().addClass('is-active');
	}
});

function copyToClipboard(text) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}

$('.url-share').click(function () {
	$('.copied-notice').css('opacity', '1');
	setTimeout(function () {
		$('.copied-notice').css('opacity', '0');
	}, 1000)
});
