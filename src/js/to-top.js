export { onScroll, onToTop };

const toTopBtn = document.querySelector('.to-top-btn');

window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTop);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTopBtn.classList.add('to-top-btn__visible');
  }
  if (scrolled < coords) {
    toTopBtn.classList.remove('to-top-btn__visible');
  }
}

function onToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
