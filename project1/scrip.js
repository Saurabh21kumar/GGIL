const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function slideImages() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(slideImages, 3000); 

// card Slider js


const slider = document.querySelector('.slidercard');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function updateSlider() {
      let cardWidth = cards[0].offsetWidth + 20; // card + margin
      
      slider.style.transform = `translateX(-${currentIndex * cardWidth-1005}px) `;
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    window.addEventListener('resize', updateSlider);
