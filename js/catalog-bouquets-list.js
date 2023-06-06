const bouquetList = document.querySelector(
	".catalog-bouquets__carousel-slide"
);

function renderBouquets(bouquets) {
	let html = "";

	for (const bouquet of bouquets) {
		const active = bouquet.isActive ? "active" : "";

		html += `<article class="carousel-bouquet-item ${active}">
        <a href="bouquet-page.html">
			<img src="${bouquet.imgSrc}" class="d-block w-100" alt="${bouquet.name}bouquet" />
		</a>
		<div class="d-flex flex-column align-items-center">
			<div class="d-flex flex-column align-items-center">
				<a href="bouquet-page.html">
					<p class="catalog-bouquets__name">${bouquet.name}</p>
				 </a>
          		<p class="catalog-bouquets__price">$${bouquet.price},00USD</p>
        	</div>
			<button class="catalog-bouquets__add-to-cart btn--primary">Add to cart</button>
		</div>
      </article>`;
	}
	bouquetList.innerHTML = html;
}

renderBouquets(bouquets);

const carousel = document.querySelector(".catalog-bouquets__carousel");
const carouselInner = document.querySelector(
	".catalog-bouquets__carousel-slide"
);
const prevButton = carousel.querySelector(
	".catalog-bouquets__carousel-btn--prev"
);
const nextButton = carousel.querySelector(
	".catalog-bouquets__carousel-btn--next"
);
const productCards = carouselInner.querySelectorAll(".carousel-bouquet-item");

let currentIndex = 0;
let cardsInARow;
let cardWidth;

setCardsSettings();
window.addEventListener("resize", setCardsSettings, true);

function setCardsSettings() {
	if (window.innerWidth >= 1024) cardsInARow = 5;
	else if (window.innerWidth > 768) cardsInARow = 2;
	else cardsInARow = 1;

	cardWidth = 100 / cardsInARow;
	currentIndex = 0;
	updateCarousel();
}

function updateCarousel() {
	carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
}

prevButton.addEventListener("click", () => {
	if (currentIndex === 0) currentIndex = productCards.length - cardsInARow;
	else currentIndex--;

	updateCarousel();
});

nextButton.addEventListener("click", () => {
	if (currentIndex + cardsInARow === productCards.length) currentIndex = 0;
	else currentIndex++;

	updateCarousel();
});
