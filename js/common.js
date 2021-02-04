$(document).ready(function ($) {
	

	$('.popup-fade-reg').click(function (e) {
		if ($(e.target).closest('.popup-log').length == 0) {
			$(this).fadeOut();
		}
	});


	$('.popup-open-reg').click(function () {
		$('.popup-fade-reg').fadeIn();
		return false;
	});

	$('.popup-close-reg').click(function () {
		$(this).parents('.popup-fade-reg').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-reg').fadeOut();
		}
	});





	$('.popup-fade-log').click(function (e) {
		if ($(e.target).closest('.popup-log').length == 0) {
			$(this).fadeOut();
		}
	});
	$('.popup-open-log').click(function () {
		$('.popup-fade-log').fadeIn();
		return false;
	});

	$('.popup-close-log').click(function () {
		$(this).parents('.popup-fade-log').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-log').fadeOut();
		}
	});



	$('.popup-fade-pick').click(function (e) {
		if ($(e.target).closest('.popup-pick').length == 0) {
			$(this).fadeOut();
		}
	});
	$('.popup-open-pick').click(function () {
		$('.popup-fade-pick').fadeIn();
		return false;
	});

	$('.popup-close-pick').click(function () {
		$(this).parents('.popup-fade-pick').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-pick').fadeOut();
		}
	});


	$(function () {

		//BEGIN
		$(".js-acc-title").on("click", function (e) {

			e.preventDefault();
			var $this = $(this);

			if (!$this.hasClass("acc-active")) {
				$(".js-acc-content").slideUp(800);
				$(".js-acc-title").removeClass("acc-active");
				$('.js-acc-rotate').removeClass('acc-rotate');
			}

			$this.toggleClass("acc-active");
			$this.next().slideToggle();
			$('.js-acc-rotate', this).toggleClass('acc-rotate');
		});
		//END

	});

	//youtube script
	var player;

	onYouTubeIframeAPIReady = function () {
		player = new YT.Player('current-player', {
			height: '285',
			width: '570',
			videoId: 'QNcB_vuTLSg', // youtube video id
			playerVars: {
				'autoplay': 0,
				'rel': 0,
				'showinfo': 0
			},
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	}

	var p = document.getElementById("current-player");
	$(p).hide();

	var t = document.getElementById("thumbnail");
	t.src = "img/video-bg.png";

	onPlayerStateChange = function (event) {
		if (event.data == YT.PlayerState.ENDED) {
			$('.current-start-video').fadeIn('normal');
		}
	}

	$(document).on('click', '.current-start-video', function () {
		$(this).hide();
		$("#current-player").show();
		$("#thumbnail-container").hide();
		player.playVideo();
	});

	$('.slider-video').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		mobileFirst: true,
		prevArrow: '<div class="slide-arrow prev-arrow"> <i class="fas fa-chevron-left"></i> </div>',
		nextArrow: '<div class="slide-arrow next-arrow"> <i class="fas fa-chevron-right"></i> </div>',
		responsive: [{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false
				}
			}
		]
	});

	$('.slider-request').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		mobileFirst: true,
		prevArrow: '<div class="slide-arrow prev-arrow"> <i class="fas fa-chevron-left"></i> </div>',
		nextArrow: '<div class="slide-arrow next-arrow"> <i class="fas fa-chevron-right"></i> </div>',
		responsive: [{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			}
		]
	});

	$('.rateit').raty({
		readOnly: true
	});

});


$(document).ready(function ($) {
	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		mobileFirst: true,
		prevArrow: '<div class="slide-arrow prev-arrow"> <i class="fas fa-chevron-left"></i> </div>',
		nextArrow: '<div class="slide-arrow next-arrow"> <i class="fas fa-chevron-right"></i> </div>',
		responsive: [{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false
				}
			}
		]
	});
});

$(document).ready(function ($) {
	$('.notes-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		rows: 2,
		mobileFirst: true,
		prevArrow: '<div class="slide-arrow prev-arrow"> <i class="fas fa-chevron-left"></i> </div>',
		nextArrow: '<div class="slide-arrow next-arrow"> <i class="fas fa-chevron-right"></i> </div>',
		responsive: [{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false
				}
			}
		]
	});
});


$(document).ready(function () {
	$('.accordion-list > li > .answer').hide();

	$('.accordion-list > li').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".answer").slideUp();
		} else {
			$(".accordion-list > li.active .answer").slideUp();
			$(".accordion-list > li.active").removeClass("active");
			$(this).addClass("active").find(".answer").slideDown();
		}
		return false;
	});
});