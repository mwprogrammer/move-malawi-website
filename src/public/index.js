let intervalID;
const slides = [...document.getElementsByClassName("slide")];
let nextSlide = 2;

function displaySlide(slideNumber) {
    
    const slideToDisplay = slides[slideNumber];
    
    slides.forEach((slide) => { slide.style.opacity = 0 });

    slideToDisplay.style.opacity = 1;
    
}