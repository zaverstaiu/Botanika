$(function () {

  $('.mobile-btn').on('click', function () {
    $('.mobile-menu__list').toggleClass('mobile-menu__list--open');
    $('.mobile-btn__menu').toggleClass('mobile-btn__menu--open');
    $('.mobile-btn__close').toggleClass('mobile-btn__close--open');
  });
});
