"use strict";

const slides = document.querySelectorAll(".slide"); 

const btnLeft = document.querySelector(".slider--btn--left");
const btnRight = document.querySelector(".slider--btn--right"); 
const imagesContainer = document.querySelector(".slider .images"); 

let curSlide = 0;
const maxSlide = slides.length;


const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - 2 - slide)}%)`)
  );
  if (curSlide === maxSlide - 3) {
    btnRight.style.display = "none";
  }

  if (curSlide === -2) {
    btnLeft.style.display = "none";
  }
};

goToSlide(0);

// Next Slide
const nextSlide = function () {
  btnLeft.style.display = "inline-block";
  curSlide++;
  goToSlide(curSlide);
};

// Prev Slide
const prevSlide = function () {
  btnRight.style.display = "inline-block";
  curSlide--;
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
