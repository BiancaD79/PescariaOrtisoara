let slideIndex = 1;
let lenght = 4;
//const fs = require('fs');
//const length = fs.readdirSync('/images/slideshow_images').length;

function plusSlides(n) {
    if(n == 1)
        {slideIndex += n; }
    else
        {slideIndex-=n; }
    if(slideIndex > lenght) {slideIndex = 1;}
    if(slideIndex < 1) {slideIndex = lenght;}
    showSlide();
  }

function showSlide(n){

    let slide = document.getElementById("slideshow-image");
    let value = "images/slideshow_images/img" + slideIndex +".jpg"
    slide.src = value;
}

showSlide(slideIndex);
