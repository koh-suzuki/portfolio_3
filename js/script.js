$(function() {
  var nav = $(".header__nav"),
      outerWidth = nav.outerWidth()
      overray = $(".menu__overray");
  $(".menu").click(function() {
    $(this).toggleClass("open");
    $("body").toggleClass("open");
    if($(this).hasClass("open")) {
      overray.fadeIn(200);
      nav.stop().animate({"right": 0}, 200,);
    } else {
      overray.fadeOut(200);
      nav.stop().animate({"right": - outerWidth}, 200,);
    }
  });
});
