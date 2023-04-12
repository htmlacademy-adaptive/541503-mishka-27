const mainNav = document.querySelector('.page-header__main-nav');
mainNav.classList.remove('page-header__main-nav--opened');
const pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('page-header__main-nav--opened')) {
    mainNav.classList.remove('page-header__main-nav--opened');
  } else {
    mainNav.classList.add('page-header__main-nav--opened');
  }
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
const catalogCartBtn = document.querySelector('.catalog-item__cart-btn');
const modalButton = document.querySelector('.modal-container__button');

if (modalContainer) {
  const showModal = function() {
    modalContainer.classList.add('modal-container--shown');
  };

  const hideModal = function() {
    modalContainer.classList.remove('modal-container--shown');
  };

  if (weekProductButton) {
    weekProductButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      showModal();
    });
  };

  if (catalogCartBtn) {
    catalogCartBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      showModal();
    });
  };

  document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape') {
      hideModal();
    };
  });
};
