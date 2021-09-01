$(function () {

  $('.mobile-btn').on('click', function () {
    $('.mobile-menu__list').toggleClass('mobile-menu__list--open');
    $('.mobile-btn').toggleClass('mobile-btn--open');
    $('body').toggleClass('lock');
  });


  $(function () { // всплывающая подсказка
    $("button").each(function (b) {//элемент (кнопка)
      if (this.title) {
        var c = this.title;
        var x = -30;//расположение по горизонтали(left)
        var y = 30;//расположение по вертикали (top)
        $(this).mouseover(function (d) {
          this.title = "";
          $("body").append('<div class="tooltip">' + c + "</div>");
          $(".tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px",
            opacity: "1"//полупрозрачность
          }).show(500);//скорость появления подсказки
        }).mouseout(function () {
          this.title = c;
          $(".tooltip").remove();
        }).mousemove(function (d) {
          $(".tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px"
          });
        });
      }
    });
  });

  // слайдер

$('.popular__list').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="popular__btn popular-prev" type="button" title="назад"><img class= "popular__btn-img" src="images/icon/prev.svg" alt="стрелка назад" ></button>',
  nextArrow: '<button class="popular__btn popular-next" type="button" title="вперёд"><img class= "popular__btn-img" src="images/icon/next.svg" alt="стрелка вперёд" ></button>'
});

});
