let intervalID;
let heroSlideNumber = 1; // Make it 2 when running slideshow
let valuesSlideNumber = 1;

// setTimeout(runHeroSlideShow, 1000);

function runHeroSlideShow() {

    intervalID = setInterval(displaySlides, 3000);

};

function displaySlides() {

    if (heroSlideNumber === 1) {
        displayFirstHeroSlide();
    } else if (heroSlideNumber === 2) {
        displaySecondHeroSlide();
    } else if (heroSlideNumber === 3) {
        displayLastHeroSlide();
    } else {
        clearInterval(intervalID);
        displayFirstHeroSlide();
        heroSlideNumber = 1;
        return;
    }

    heroSlideNumber++;

}

function displayHeroPreviousSlide() {

    heroSlideNumber -= 1;

    if (heroSlideNumber === 1) {
        displayFirstHeroSlide();
    } else if (heroSlideNumber === 2) {
        displaySecondHeroSlide();
    } else if (heroSlideNumber === 3) {
        displayLastHeroSlide();
    } else {
        heroSlideNumber = 1;
        displayFirstHeroSlide();
    }

}

function displayHeroNextSlide() {

    heroSlideNumber += 1;

    if (heroSlideNumber === 1) {
        displayFirstHeroSlide();
    } else if (heroSlideNumber === 2) {
        displaySecondHeroSlide();
    } else if (heroSlideNumber === 3) {
        displayLastHeroSlide();
    } else {
        heroSlideNumber = 3;
        displayLastHeroSlide();
    }

}

function displayFirstHeroSlide() {

    document.getElementById("hero-slide-1").style.opacity = 1;
    document.getElementById("hero-slide-1-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("hero-slide-2").style.opacity = 0;
    document.getElementById("hero-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("hero-slide-3").style.opacity = 0;
    document.getElementById("hero-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displaySecondHeroSlide() {

    document.getElementById("hero-slide-1").style.opacity = 0;
    document.getElementById("hero-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("hero-slide-2").style.opacity = 1;
    document.getElementById("hero-slide-2-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("hero-slide-3").style.opacity = 0;
    document.getElementById("hero-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displayLastHeroSlide() {

    document.getElementById("hero-slide-1").style.opacity = 0;
    document.getElementById("hero-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("hero-slide-2").style.opacity = 0;
    document.getElementById("hero-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("hero-slide-3").style.opacity = 1;
    document.getElementById("hero-slide-3-marker").style.backgroundColor = "rgb(3,105,161)";

}

function displayFirstValuesSlide() {

    document.getElementById("values-slide-1").style.opacity = 1;
    document.getElementById("values-slide-1-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("values-slide-2").style.opacity = 0;
    document.getElementById("values-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-3").style.opacity = 0;
    document.getElementById("values-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-4").style.opacity = 0;
    document.getElementById("values-slide-4-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-5").style.opacity = 0;
    document.getElementById("values-slide-5-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displaySecondValuesSlide() {

    document.getElementById("values-slide-1").style.opacity = 0;
    document.getElementById("values-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-2").style.opacity = 1;
    document.getElementById("values-slide-2-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("values-slide-3").style.opacity = 0;
    document.getElementById("values-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-4").style.opacity = 0;
    document.getElementById("values-slide-4-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-5").style.opacity = 0;
    document.getElementById("values-slide-5-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displayThirdValuesSlide() {

    document.getElementById("values-slide-1").style.opacity = 0;
    document.getElementById("values-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-2").style.opacity = 0;
    document.getElementById("values-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-3").style.opacity = 1;
    document.getElementById("values-slide-3-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("values-slide-4").style.opacity = 0;
    document.getElementById("values-slide-4-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-5").style.opacity = 0;
    document.getElementById("values-slide-5-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displayFourthValuesSlide() {

    document.getElementById("values-slide-1").style.opacity = 0;
    document.getElementById("values-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-2").style.opacity = 0;
    document.getElementById("values-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-3").style.opacity = 0;
    document.getElementById("values-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-4").style.opacity = 1;
    document.getElementById("values-slide-4-marker").style.backgroundColor = "rgb(3,105,161)";
    document.getElementById("values-slide-5").style.opacity = 0;
    document.getElementById("values-slide-5-marker").style.backgroundColor = "rgb(255,255,255)";

}

function displayLastValuesSlide() {

    document.getElementById("values-slide-1").style.opacity = 0;
    document.getElementById("values-slide-1-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-2").style.opacity = 0;
    document.getElementById("values-slide-2-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-3").style.opacity = 0;
    document.getElementById("values-slide-3-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-4").style.opacity = 0;
    document.getElementById("values-slide-4-marker").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("values-slide-5").style.opacity = 1;
    document.getElementById("values-slide-5-marker").style.backgroundColor = "rgb(3,105,161)";

}

function displayValuesPreviousSlide() {

    valuesSlideNumber -= 1;

    if (valuesSlideNumber === 1) {
        displayFirstValuesSlide();
    } else if (valuesSlideNumber === 2) {
        displaySecondValuesSlide();
    } else if (valuesSlideNumber === 3) {
        displayThirdValuesSlide();
    } else if (valuesSlideNumber === 4) {
        displayFourthValuesSlide();
    } else if (valuesSlideNumber === 5) {
        displayLastValuesSlide();
    } else {
        valuesSlideNumber = 1;
        displayFirstValuesSlide();
    }

}

function displayValuesNextSlide() {

    valuesSlideNumber += 1;

    if (valuesSlideNumber === 1) {
        displayFirstValuesSlide();
    } else if (valuesSlideNumber === 2) {
        displaySecondValuesSlide();
    } else if (valuesSlideNumber === 3) {
        displayThirdValuesSlide();
    } else if (valuesSlideNumber === 4) {
        displayFourthValuesSlide();
    } else if (valuesSlideNumber === 5) {
        displayLastValuesSlide();
    } else {
        valuesSlideNumber = 5;
        displayLastValuesSlide();
    }

}