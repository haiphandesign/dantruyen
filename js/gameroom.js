// CARD PICKER

$('.card-panel-list .card-list .card').click(function (e) {
	e.preventDefault();
	$(this).siblings().removeClass('is-selected');
	$(this).addClass('is-selected');
});

$('#tabNarratorCardsPlaces .card-panel-list .card-list .card').click(function (e) {
	e.preventDefault();
	var pokemonRegions = ['Pallet Town', 'Viridian City', 'Pewter City', 'Cerulean City', 'Vermilion City', 'Lavender Town', 'Celadon City', 'Fuchsia City', 'Saffron City', 'Cinnabar Island'];
	var pokemonRegionsDesc = [
		'A fairly new and quiet town. Its a small and pretty place.',
		'A beautiful city that is enveloped in green year-round.',
		'A quiet city nestled between rugged mountains and rocks.',
		'A beautiful city with flowing water and blooming flowers.',
		'A southern city that is bathed in orange by the setting sun.',
		'A small town covered in a beautiful hue of purple.',
		'A rich, rainbow colored city where people and Pokémon gather.',
		'A historic village that has become new.',
		'The biggest city in Kanto, shining with a golden light.',
		'A town used to be here until it was swept away by an eruption.'
	];
	var cardIndex = $(this).index();
	$('#tabNarratorCardsPlaces .card-panel-preview .card').removeClass('card-empty');
	$('#tabNarratorCardsPlaces .card-panel-preview .card .card-info').html('<h3></h3><p></p>');
	$('#tabNarratorCardsPlaces .card-panel-preview .card .card-info h3').html(pokemonRegions[cardIndex]);
	$('#tabNarratorCardsPlaces .card-panel-preview .card .card-info p').html(pokemonRegionsDesc[cardIndex]);
	$('#tabNarratorCardsPlaces .card-panel-preview .card .card-image img').attr('src', `./img/content/card/${pokemonRegions[cardIndex]}.png`);
	if (cardIndex == '0') {
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state i').addClass('fa-check');
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state i').removeClass('fa-exchange');
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state span').text('Đang sử dụng');
	} else {
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state i').removeClass('fa-check');
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state i').addClass('fa-exchange');
		$('#tabNarratorCardsPlaces .card-panel-preview .card-action .card-state span').text('Thay thế');
	}
});

$('#tabNarratorCardsObstacles .card-panel-list .card-list .card').click(function (e) {
	e.preventDefault();
	var pokemonObstacles = ['Gặp Giáo sư Oak', 'Pokémon đầu tiên', 'Rời khỏi Pallet Town'];
	var pokemonObstaclesDesc = [
		'No dolor consetetur sadipscing ea duo et clita. Clita at rebum dolor dolor takimata lorem consetetur, dolor ea at sit.',
		'Gubergren dolore diam vero sit labore stet aliquyam ipsum labore. Ut ea diam gubergren erat dolor kasd eirmod sit. Lorem.',
		'Et sea eos dolor duo ipsum clita nonumy, erat no kasd labore voluptua, diam ut eirmod diam eirmod ipsum magna.'
	];
	var pokemonObstaclesImage = ['obstacle-oak', 'obstacle-pokemon', 'obstacle-depart']
	var cardIndex = $(this).index();
	$('#tabNarratorCardsObstacles .card-panel-preview .card').removeClass('card-empty');
	$('#tabNarratorCardsObstacles .card-panel-preview .card .card-info').html('<h3></h3><p></p>');
	$('#tabNarratorCardsObstacles .card-panel-preview .card .card-info h3').html(pokemonObstacles[cardIndex]);
	$('#tabNarratorCardsObstacles .card-panel-preview .card .card-info p').html(pokemonObstaclesDesc[cardIndex]);
	$('#tabNarratorCardsObstacles .card-panel-preview .card .card-image img').attr('src', `./img/content/card/${pokemonObstaclesImage[cardIndex]}.jpg`);
});


$('#tabNarratorCardsAssets .card-panel-list .card-list .card').click(function (e) {
	e.preventDefault();
	var pokemonAssets = ['PokéBall', 'PokéDex', 'Xe đạp Silph Co.'];
	var pokemonAssetsDesc = [
		'Đây là loại bóng đầu tiên mà bạn sẽ được sở hữu ngay khi bước chân vào thế giới bắt Pokémon.',
		'Pokédex là một thiết bị điện tử được thiết kế để phân loại và cung cấp thông tin về tất cả các chủng loài Pokémon',
		'Xe đạp chuyên dụng hỗ trợ di chuyển nhanh chóng được sản xuất bởi tập đoàn Silph Co.'
	];
	var cardIndex = $(this).index();
	$('#tabNarratorCardsAssets .card-panel-preview .card').removeClass('card-empty');
	$('#tabNarratorCardsAssets .card-panel-preview .card .card-info').html('<h3></h3><p></p>');
	$('#tabNarratorCardsAssets .card-panel-preview .card .card-info h3').html(pokemonAssets[cardIndex]);
	$('#tabNarratorCardsAssets .card-panel-preview .card .card-info p').html(pokemonAssetsDesc[cardIndex]);
	$('#tabNarratorCardsAssets .card-panel-preview .card .card-image img').attr('src', `./img/content/card/${pokemonAssets[cardIndex]}.jpg`);
});


// CARD MODAL : CARD OBSTACLE PLAY

setTimeout(function () {
	$('.obstacle-progress .obstacle-progress-plus').click(function () {
		var obstaclePointCurrent = $(this).siblings('.obstacle-progress-point').html();
		if (obstaclePointCurrent < 8) {
			var obstaclePointPlus = parseInt(obstaclePointCurrent, 10) + 1;
			$(this).siblings('.obstacle-progress-point').html(obstaclePointPlus);
			$(this).parent().siblings('.title').children('p').children('strong').html(8 - obstaclePointPlus);
			obstaclePointSpan = '';
			for (var i = 0; i < obstaclePointPlus; i++) {
				obstaclePointSpan += '<span></span>';
			}
			$(this).parent().parent().parent().siblings('.modal-panel-preview').find('.obstacle-progress').html(obstaclePointSpan);
			console.log(obstaclePointPlus);
		}
	});

	$('.obstacle-progress .obstacle-progress-minus').click(function () {
		var obstaclePointCurrent = $(this).siblings('.obstacle-progress-point').html();
		if (obstaclePointCurrent >= 1) {
			var obstaclePointMinus = parseInt(obstaclePointCurrent, 10) - 1;
			$(this).siblings('.obstacle-progress-point').html(obstaclePointMinus);
			$(this).parent().siblings('.title').children('p').children('strong').html(8 - obstaclePointMinus);
			obstaclePointSpan = '';
			for (var i = 0; i < obstaclePointMinus; i++) {
				obstaclePointSpan += '<span></span>';
			}
			$(this).parent().parent().parent().siblings('.modal-panel-preview').find('.obstacle-progress').html(obstaclePointSpan);
			console.log(obstaclePointMinus);
		};
	});
}, 500);
