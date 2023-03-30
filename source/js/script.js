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
