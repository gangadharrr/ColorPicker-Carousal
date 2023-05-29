values=["first","second","third","fourth","fifth"]

const page1=document.querySelector(`#first-page`);
    page1.addEventListener('change',()=>{
    page1.style.backgroundColor=document.querySelector(`#first-page #favcolor`).value;
    });
const page2=document.querySelector(`#second-page`);
page2.addEventListener('change',()=>{
page2.style.backgroundColor=document.querySelector(`#second-page #favcolor`).value;
});
const page3=document.querySelector(`#third-page`);
page3.addEventListener('change',()=>{
page3.style.backgroundColor=document.querySelector(`#third-page #favcolor`).value;
});
const page4=document.querySelector(`#fourth-page`);
page4.addEventListener('change',()=>{
page4.style.backgroundColor=document.querySelector(`#fourth-page #favcolor`).value;
});

const page5=document.querySelector(`#fifth-page`);
page5.addEventListener('change',()=>{
page5.style.backgroundColor=document.querySelector(`#fifth-page #favcolor`).value;
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex = n>0?(slideIndex+n)%values.length:slideIndex+n<0?values.length-1:slideIndex+n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  document.querySelector(".number-display p").innerHTML=`${n==0?5:n}/5`;
  let slides = document.getElementsByClassName("display-card");
  let buttons= document.querySelectorAll(".dot button");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.backgroundColor=slides[i].querySelector('input').value
    buttons[i].style.backgroundColor = "#000";
  }
  slides[slideIndex-1].style.display = "flex";
  buttons[slideIndex-1].style.backgroundColor = "rgb(255, 115, 115)";

  slides[slideIndex-1].style.width = "1282px";

}