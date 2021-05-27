$(document).ready(function ($) {


	$('.popup-fade-reg').click(function (e) {
		if ($(e.target).closest('.popup-reg').length == 0) {
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
			height: '100%',
			width: '100%',
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

	/* $('.slider-request').slick({
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
	}); */

	$('.rateit').raty({
		readOnly: true
	});
});

$(document).ready(function ($) {
	$('.rateit-ter').raty({
		readOnly: true
	});
});

$(document).ready(function ($) {
	$('.slider-request').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		slidesPerRow: 2,
		centerMode: false,
		mobileFirst: false,
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
					slidesToShow: 1,
					slidesPerRow: 2,
					slidesToScroll: 1,
					adaptiveHeight: true,
					centerMode: false,
					rows: 1
				}
			},

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesPerRow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			}
		]
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
					centerMode: false,
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
		dots: true,
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


$(document).ready(function ($) {
	$(".messages-block-title").click(function () {
		$header = $(this);
		$content = $header.next();
		$content.slideToggle(500, function () {
			$header.text(function () {
				return
			});
		});

	});
});

document.addEventListener('DOMContentLoaded', function () {
	var initialLocaleCode = 'ru';
	var localeSelectorEl = document.getElementById('locale-selector');
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: 'prev,next',
			height: '100%',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},
		initialDate: '2020-09-12',
		locale: initialLocaleCode,
		buttonIcons: true, // show the prev/next text
		editable: true,
		dayMaxEvents: true, // allow "more" link when too many events
		events: [{
				title: 'All Day Event',
				start: '2020-09-01'
			},
			{
				title: 'Long Event',
				start: '2020-09-07',
				end: '2020-09-10'
			},
			{
				groupId: 999,
				title: 'Repeating Event',
				start: '2020-09-09T16:00:00'
			},
			{
				groupId: 999,
				title: 'Repeating Event',
				start: '2020-09-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2020-09-11',
				end: '2020-09-13'
			},
			{
				title: 'Meeting',
				start: '2020-09-12T10:30:00',
				end: '2020-09-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2020-09-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2020-09-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2020-09-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2020-09-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2020-09-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2020-09-28'
			}
		]
	});

	calendar.render();

});

$(document).ready(function () {
	var size = 40,
		newsContent = $('.messages-list-body-short'),
		newsText = newsContent.text();

	if (newsText.length > size) {
		newsContent.text(newsText.slice(0, size) + ' ...');
	}
})

$(document)
	.ready(function () {
		var variant = $('#uzz_1')
			.clone(true);
		$('#add_1')
			.click(function () {
				$(variant)
					.clone(true)
					.appendTo('#variants_1')
					.fadeIn('slow')
					.find("input[name*=name]")
					.focus();
			});
		$(document)
			.on('click', 'a.del_variant:not(:first)', function () {
				$(this)
					.parents(".control-group")
					.remove();
			});
	});

$(document)
	.ready(function () {
		var variant = $('#uzz_2')
			.clone(true);
		$('#add_2')
			.click(function () {
				$(variant)
					.clone(true)
					.appendTo('#variants_2')
					.fadeIn('slow')
					.find("input[name*=name]")
					.focus();
			});
		$(document)
			.on('click', 'a.del_variant:not(:first)', function () {
				$(this)
					.parents(".control-group")
					.remove();
			});
	});


var currentTab = 0; // Current tab is set to be the first tab (0)
	showTab(currentTab); // Display the crurrent tab

	function showTab(n) {
		// This function will display the specified tab of the form...
		var x = document.getElementsByClassName("step-tab");
		x[n].style.display = "block";
		//... and fix the Previous/Next buttons:
		if (n == 0) {
			document.getElementById("prevBtn").style.display = "none";
		} else {
			document.getElementById("prevBtn").style.display = "inline";
		}
		if (n == (x.length - 1)) {
			document.getElementById("nextBtn").innerHTML = "Отправить";
		} else {
			document.getElementById("nextBtn").innerHTML = "Дальше";
		}
		//... and run a function that will display the correct step indicator:
		/* fixStepIndicator(n) */
	}

	function nextPrev(n) {
		// This function will figure out which tab to display
		var x = document.getElementsByClassName("step-tab");
		// Exit the function if any field in the current tab is invalid:
		if (n == 1 && !validateForm()) return false;
		// Hide the current tab:
		x[currentTab].style.display = "none";
		// Increase or decrease the current tab by 1:
		currentTab = currentTab + n;
		// if you have reached the end of the form...
		if (currentTab >= x.length) {
			// ... the form gets submitted:
			document.getElementById("regForm").submit();
			return false;
		}
		// Otherwise, display the correct tab:
		showTab(currentTab);
	}

	function validateForm() {
		// This function deals with validation of the form fields
		var x, y, i, valid = true;
		x = document.getElementsByClassName("step-tab");
		y = x[currentTab].getElementsByTagName("input");
		// A loop that checks every input field in the current tab:
		for (i = 0; i < y.length; i++) {
			// If a field is empty...
			if (y[i].value == "") {
				// add an "invalid" class to the field:
				y[i].className += " invalid";
				// and set the current valid status to false
				valid = false;
			}
		}
		// If the valid status is true, mark the step as finished and valid:
		/* if (valid) {
			document.getElementsByClassName("step")[currentTab].className += " finish";
		} */
		return valid; // return the valid status
	}

	/* function fixStepIndicator(n) {
		// This function removes the "active" class of all steps...
		var i, x = document.getElementsByClassName("step");
		for (i = 0; i < x.length; i++) {
			x[i].className = x[i].className.replace(" active", "");
		}
		//... and adds the "active" class on the current step:
		x[n].className += " active";
	} */