const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__btn--prev');
const nextButton = carousel.querySelector('.carousel__btn--next');
const carouselCard = carousel.querySelectorAll('.carousel-card');

let currentIndex = 0;

const updateSlide = () => {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselCard.length) % carouselCard.length;
    updateSlide();
})

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCard.length;
    updateSlide();
})