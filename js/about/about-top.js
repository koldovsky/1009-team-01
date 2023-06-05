const carouselCard = document.querySelector('.animated-carousel__slides');

const renderSlides = (slides) => {
    let html = "";
    for (const slide of slides) {
        const active = slide.isActive ? "active" : "";

        html += `<article class="carousel-slide d-flex justify-content-center align-items-center ${active}">
        <div class="carousel-slide__img-container d-flex justify-content-center align-items-center">
          <object type="image/svg+xml" data="image.svg">
            <img class="mx-auto" src="${slide.imgSrc}" alt="${slide.name}">
          </object>
        </div>
      </article>`;
    }
    carouselCard.innerHTML = html;
}

renderSlides(slides);

const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__slides');
const prevButton = carousel.querySelector('.carousel__btn--prev');
const nextButton = carousel.querySelector('.carousel__btn--next');
const carouselSlides = carousel.querySelectorAll('.carousel-card');

let currentIndex = 0;
let slidesNumber;
let slideWidth;

setSlidesSettings();
window.addEventListener('resize', setSlidesSettings, true);

function setSlidesSettings() {
    const windowWidth = window.innerWidth;

	if (windowWidth >= 990) slidesNumber = 5;
	else if (windowWidth > 768) slidesNumber = 2;
	else slidesNumber = 1;

	slideWidth = 100 / slidesNumber;
	currentIndex = 0;
	updateCarousel();
}

function updateCarousel() {
	carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

prevButton.addEventListener('click', () => {
	if (currentIndex === 0) currentIndex = carouselSlides.length - slidesNumber;
	else currentIndex--;

	updateCarousel();
});

nextButton.addEventListener('click', () => {
	if (currentIndex + slidesNumber === carouselSlides.length) currentIndex = 0;
	else currentIndex++;

	updateCarousel();
});