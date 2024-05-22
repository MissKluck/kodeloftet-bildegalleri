let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Wire things up */
let prevbutton = document.getElementById("prev-button") // Get the element by the Id used in html
prevbutton.addEventListener("click", () => {plusSlides(-1)})

let nextbutton = document.getElementById("next-button") // Get the element by the Id used in html
nextbutton.addEventListener("click", () => {plusSlides(1)})

/* Hent ut alle dotene */
let items = document.querySelectorAll('.dot')

/* For hver dot legger du til en funksjon som skjer når doten blir trykket på */
for (let i = 0; i < items.length; i++) {
    console.log(i+1)
    items[i].addEventListener("click", () => {currentSlide(1)})
}