$(document).ready(function() {

	$('.toggle-nav').click(function() {
		$('.mnu-wrapper').toggleClass('active');
		$('.body-dark').toggleClass('active');
	});
	$('.mnu-close').click(function() {
		$('.mnu-wrapper').removeClass('active');
		$('.body-dark').removeClass('active');
	});
	$(document).mouseup(function (e){
		var block = $('.mnu-wrapper');
		if (!block.is(e.target) && block.has(e.target).length === 0){
			block.removeClass('active');
			$('.body-dark').removeClass('active');
		}
	});

	var clientsSlider = new Swiper('.clients-slider', {
		slidesPerView: 2,
		loop: true,
		pagination: {
			el: '.clients-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		}
	});

	var casesSlider = new Swiper('.cases-slider', {
		slidesPerView: 1.2,
		loop: true,
		spaceBetween: 10,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 1.3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
				slideToClickedSlide: false,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				slideToClickedSlide: false,
			},
		}
	});

	var casesPhotos = new Swiper('.cases-item-photos', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.slider-pagination',
			clickable: true,
		},
	});

	$('.cases-tabs-nav-item').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.cases').find('.cases-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});

	var staffPhotos = new Swiper('.staff-photos', {
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
			el: '.slider-pagination',
			clickable: true,
		},
	});

	$('.scroll').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top + 0;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$('[data-fancybox]').fancybox({
		buttons: [
		"close"
		],
	});

	$('.phone-input').mask('+7 (999) 999 - 99 - 99');

	$.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input[name="phone"]').click(function(){
		$(this).setCursorPosition(4);
	});

	$('form').submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	var autoSlider = new Swiper('.auto-slider', {
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.slider-pagination',
			clickable: true,
		},
	});

	var bodyguardClientsPhotos = new Swiper('.bodyguard-clients-item-photos', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.slider-pagination',
			clickable: true,
		},
	});

	$('.calc-range-1').slider({
		range: 'min',
		min: 1,
		max: 24,
		step: 1,
		value: 5,
		slide : function(event, ui) {
			$('.calc-range-item-value-1').text(ui.value);
		},
	});
	$('.calc-range-item-value-1').text($('.calc-range-1').slider('value'));

	$('.calc-range-2').slider({
		range: 'min',
		min: 1,
		max: 5,
		step: 1,
		value: 2,
		slide : function(event, ui) {
			$('.calc-range-item-value-2').text(ui.value);
		},
	});
	$('.calc-range-item-value-2').text($('.calc-range-2').slider('value'));

	$('.calc-tariffs-item-1').click(function() {
		if ($('.calc-tariffs-item-switch-input-1').is(':checked')) {
			$('.calc-tariffs-item-switch-input-1').parents('.calc-tariffs-item-1').addClass('active');
		} else if (!$('.calc-tariffs-item-switch-input-1').is(':checked')) {
			$('.calc-tariffs-item-switch-input-1').parents('.calc-tariffs-item-1').removeClass('active');
		}
	});

	$('.calc-tariffs-item-2').click(function() {
		if ($('.calc-tariffs-item-switch-input-2').is(':checked')) {
			$('.calc-tariffs-item-switch-input-2').parents('.calc-tariffs-item-2').addClass('active');
		} else if (!$('.calc-tariffs-item-switch-input-2').is(':checked')) {
			$('.calc-tariffs-item-switch-input-2').parents('.calc-tariffs-item-2').removeClass('active');
		}
	});

	$('.calc-tariffs-item-3').click(function() {
		if ($('.calc-tariffs-item-switch-input-3').is(':checked')) {
			$('.calc-tariffs-item-switch-input-3').parents('.calc-tariffs-item-3').addClass('active');
		} else if (!$('.calc-tariffs-item-switch-input-3').is(':checked')) {
			$('.calc-tariffs-item-switch-input-3').parents('.calc-tariffs-item-3').removeClass('active');
		}
	});

});
