// ---------------- Menu Toggle -------
function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");

  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
navSlide();

// ---------------- Image Slider -------
$(document).ready(function() {
  $("#banner").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

//------------------------------------------------------------
const header=document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle("sticky", window.scrollY >0)
});


index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();







