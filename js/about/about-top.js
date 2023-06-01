const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__btn--prev');
const nextButton = carousel.querySelector('.carousel__btn--next');
const carouselCards = carousel.querySelectorAll('.carousel-card');

let currentIndex = 0;

const updateCarousel = () => {
	carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
    updateCarousel();
})

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    updateCarousel();
})

// const carousel = document.querySelector('.animated-carousel');
// const carouselInner = carousel.querySelector('.animated-carousel__inner');
// const prevButton = carousel.querySelector('.carousel__btn--prev');
// const nextButton = carousel.querySelector('.carousel__btn--next');
// const carouselCards = carousel.querySelectorAll('.carousel-card');

// let currentIndex = 0;
// let cardsInArow;
// let cardWidth;

// setCardsSettings();
// window.addEventListener("resize", setCardsSettings, true);

// function setCardsSettings() {
//  const windowWidth = window.innerWidth
// 	if (windowWidth >= 990) cardsInArow = 6;
// 	else if (windowWidth > 768) cardsInArow = 3;
//     else if (window.innerWidth > 520) cardsInArow = 2;
// 	else cardsInArow = 1;

// 	cardWidth = Math.floor(100 / cardsInArow);
// 	currentIndex = 0;
// 	updateCarousel();
// }

// function updateCarousel() {
// 	carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
// }

// prevButton.addEventListener("click", () => {
// 	if (currentIndex === 0) currentIndex = carouselCards.length - cardsInArow;
// 	else currentIndex--;

// 	updateCarousel();
// });

// nextButton.addEventListener("click", () => {
// 	if (currentIndex + cardsInArow === carouselCards.length) currentIndex = 0;
// 	else currentIndex++;

// 	updateCarousel();
// });