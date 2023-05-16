$(document).ready(function () {
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this)
					.closest('.catalog-item')
					.find('.catalog-item__content')
					.toggleClass('catalog-item__content_active');
			});
		});
	}

	function loadPartial() {
		$('[data-include]').each(function () {
			const $this = $(this);
			const url = $this.data('include');

			$.ajax({
				url: url,
				method: 'GET',
				dataType: 'html',
				success: function (data) {
					$this.html(data);

					// Виконайте функцію toggleSlide для елементів в `catalog.partial.html`
					toggleSlide('.catalog-item__link');
					toggleSlide('.catalog-item__back');
				},
				error: function () {
					console.log('Помилка завантаження файлу ' + url);
				},
			});
		});
	}
	loadPartial();

	$(document).on(
		'click',
		'ul.catalog__tabs li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.catalog__wrapper')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active');
		}
	);
});
