//image back & next function

function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-700, 0)
}
function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(700, 0)
}


// faq
let accordions = document.querySelectorAll('.accordion-wrapper .accordion');

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");

    // If the clicked accordion is active, close all others
    if (acco.classList.contains("active")) {
      accordions.forEach((otherAcco) => {
        if (otherAcco !== acco) {
          otherAcco.classList.remove("active");
        }
      });
    }
  };
});


