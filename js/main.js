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
        var x = 25;//расположение по горизонтали(left)
        var y = 30;//расположение по вертикали (top)
        $(this).mouseover(function (d) {
          this.title = "";
          $("body").append('<div id="tooltip">' + c + "</div>");
          $("#tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px",
            opacity: "1"//полупрозрачность
          }).show(500);//скорость появления подсказки
        }).mouseout(function () {
          this.title = c;
          $("#tooltip").remove();
        }).mousemove(function (d) {
          $("#tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px"
          });
        });
      }
    });
  });

});
