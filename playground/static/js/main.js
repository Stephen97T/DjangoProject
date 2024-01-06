let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slideshow');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    currentSlide = (index + slides.children.length) % slides.children.length;

    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}