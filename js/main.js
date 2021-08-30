$(function () {

  $('.mobile-btn').on('click', function () {
    $('.mobile-menu__list').toggleClass('mobile-menu__list--open');
    $('.mobile-btn').toggleClass('mobile-btn--open');
    $('body').toggleClass('lock');
  });
});
