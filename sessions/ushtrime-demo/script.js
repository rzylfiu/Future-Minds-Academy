const section2 = document.getElementById('section-2');
const imageContainer = section2.querySelector('.image-container');
const image = imageContainer.querySelector('img');

let scrollPosition = 0;
let animationTriggered = false;

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;
  const section2Top = section2.offsetTop;
  const section2Height = section2.offsetHeight;

  if (scrollPosition > section2Top && scrollPosition < section2Top + section2Height) {
    if (!animationTriggered) {
      animationTriggered = true;
      animateImage();
    }
  } else {
    animationTriggered = false;
  }
});

function animateImage() {
  const imageTop = image.offsetTop;
  const imageHeight = image.offsetHeight;
  const scrollPercentage = (scrollPosition - section2Top) / section2Height;

  image.style.transform = `translateY(${scrollPercentage * imageHeight}px)`;
}