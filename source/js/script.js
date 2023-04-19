const mainNav = document.querySelector('.page-header__main-nav');
mainNav.classList.remove('page-header__main-nav--nojs');
const pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderToggle.addEventListener('click', function() {
  mainNav.classList.toggle('page-header__main-nav--opened');
});

const swiperEl = document.querySelector('.swiper');

if (swiperEl) {
  const swiper = new Swiper(swiperEl, {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
    },
  });
};

const modalContainer = document.querySelector('.modal-container');
const weekProductButton = document.querySelector('.week-product__button');
const catalogCartButton = document.querySelector('.catalog-item__cart-button');

const showModal = function() {
  modalContainer.classList.add('modal-container--shown');
};

const hideModal = function() {
  modalContainer.classList.remove('modal-container--shown');
};

const addModalListeners = function() {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      hideModal();
    };
  });
};

if (weekProductButton) {
  weekProductButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    showModal();
    addModalListeners();
  });
};

if (catalogCartButton) {
  catalogCartButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    showModal();
    addModalListeners();
  });
};
