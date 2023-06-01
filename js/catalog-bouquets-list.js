const bouquets = [
	{
		id: "amphoraBouquet",
		image: "./images/catalog-bouquets/amphora-bouquet.png",
		name: "Amphora",
		price: "72,00",
		isActive: true,
	},
	{
		id: "daphneBouquet",
		image: "./images/catalog-bouquets/daphne-bouquet.png",
		name: "Daphne",
		price: "59,00",
	},
	{
		id: "fantasyBouquet",
		image: "./images/catalog-bouquets/fantasy-bouquet.png",
		name: "Fantasy",
		price: "119,00",
	},
	{
		id: "autumnBouquet",
		image: "./images/catalog-bouquets/autumn-bouquet.png",
		name: "Autumn",
		price: "69,00",
	},
	{
		id: "josephineBouquet",
		image: "./images/catalog-bouquets/josephine-bouquet.png",
		name: "Josephine",
		price: "99,00",
	},
	{
		id: "graceBouquet",
		image: "./images/catalog-bouquets/grace-bouquet.png",
		name: "Grace",
		price: "100,00",
	},
	{
		id: "innocenceBouquet",
		image: "./images/catalog-bouquets/innocence-bouquet.png",
		name: "Innocence",
		price: "90,00",
	},
	{
		id: "sparkleBouquet",
		image: "./images/catalog-bouquets/sparkle-bouquet.png",
		name: "Sparkle",
		price: "80,00",
	},
];

function renderBouquets(bouquets) {
	let html = "";

	for (const bouquet of bouquets) {
		const active = bouquet.isActive ? "active" : "";

		html += `<article class="carousel-bouquet-item ${active}">
        <img src="${bouquet.image}" class="d-block w-100" alt="${bouquet.name}bouquet" />
        <div class="d-flex flex-column align-items-center">
          <p class="catalog-bouquets__name">${bouquet.name}</p>
          <p class="catalog-bouquets__price">$${bouquet.price}USD</p>
          <button class="catalog-bouquets__add-to-cart btn--primary">Add to cart</button>
        </div>
      </article>`;
	}

	const bouquetList = document.querySelector(
		".catalog-bouquets__carousel-slide"
	);
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

	console.log("test:: ", window.innerWidth, `cards in a row: ${cardsInARow}`);
	console.log("cardWidth:: ", cardWidth);
}

function updateCarousel() {
	carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
}

prevButton.addEventListener("click", () => {
	console.log("cardsInARow::: ", cardsInARow);

	if (currentIndex === 0) currentIndex = productCards.length - cardsInARow;
	else currentIndex--;

	updateCarousel();
});

nextButton.addEventListener("click", () => {
	console.log("cardsInARow::: ", cardsInARow);

	if (currentIndex + cardsInARow === productCards.length) currentIndex = 0;
	else currentIndex++;

	updateCarousel();
});


