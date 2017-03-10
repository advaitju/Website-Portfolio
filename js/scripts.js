$( document ).ready(function() {

	$('.block__content__gallery-image').on('mouseenter', function() {
		$(this).find('.block__content__gallery-image__description').fadeIn(250)
	});
	$('.block__content__gallery-image__description').on('mouseleave', function() {
		$(this).fadeOut(250)
	});

});