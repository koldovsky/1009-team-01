const carousel = document.querySelector('.top__carousel');
const carouselInner = carousel.querySelector('.top__carousel-inner');
const prevButton = carousel.querySelector('.top__carousel-btn--prev');
const nextButton = carousel.querySelector('.top__carousel-btn--next');
const carouselCards = carousel.querySelectorAll('.top__carousel-cards');

let currentSlide = 0;

const updateSlide = () => {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselCards.length) % carouselCards.length;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselCards.length;
    updateSlide();
});

console.log('hui');