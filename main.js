const navItems = document.getElementById('nav__items');
const openNavBtn = document.getElementById('open__nav-btn');
const closeNavBtn = document.getElementById('close__nav-btn');

openNavBtn.addEventListener('click', () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
});

const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)

/* ============================ SWIPER JS ======================= */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // ====================== RESPONSIVE BREAKPOINTS =========================
  breakpoints: {

    // when window width is >= 0
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 600
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 1025
    1025: {
      slidesPerView: 3,
    }
  }
});

