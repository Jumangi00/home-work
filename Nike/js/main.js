const slides = document.querySelector('.reviews-container');

const slideCount = document.querySelectorAll('.rewers__sliderimg').length;

const prevButton = document.querySelector('.arrows_left');
const nextButton = document.querySelector('.arrows__right');

let currentIndex = 0;
function goToSlide(index) {

    if (index < 0) {
        index = slideCount - 1;
    } else if (index >= slideCount) {
        index = 0;
    }

    currentIndex = index;
    slides.style.transform = `translateX(${-index * 50}%)`;
}


prevButton.addEventListener('click', (e) => {
    e.preventDefault()
    goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault()
    goToSlide(currentIndex + 1);
});