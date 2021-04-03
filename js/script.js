$(function() {
  /*--------------------------------------------------*/
  /*    ハンバーガーメニューとスライドメニュー
  /*--------------------------------------------------*/ 
  var nav = $(".header__nav"),
      outerWidth = nav.outerWidth()
      overray = $(".menu__overray"),
      menu = $(".menu")
  $(".menu__wrapper").click(function() {
    /* ハンバーガーメニューの開閉 */ 
    menu.toggleClass("open");

    /* スライドメニューの開閉 */ 
    $("body").toggleClass("open");
    if(menu.hasClass("open")) {
      overray.fadeIn(200);
      nav.stop().animate({"right": 0}, 200,);
    } else {
      overray.fadeOut(200);
      nav.stop().animate({"right": - outerWidth}, 200,);
    }
  });
  /*------------------------------------------------------*/
  /*------------------------------------------------------*/

  /*======================================*/
  /*         ヘッダースクロール
  /*======================================*/
  $(window).scroll(function() {

  /* ~~~~~~~~ メインロゴのカラー変更 ~~~~~~~~~~ */ 

    /* height＝メイン画像の高さ */ 
    var height = $(".fv__main__img").height()
    /* scroll＝スクロール分の高さ */ 
    var scroll = $(this).scrollTop() + 50; 
    
    /* メイン画像高をスクロール高が超えたら色を変えるif文 */ 
    if(height <= scroll) {
      $(".site__logo__main, .site__logo__inc").css("color", "#000");
    } else {
      $(".site__logo__main, .site__logo__inc").css("color", "#fff");
    }
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    
  /* ~~~~ ハンバーガーメニューのカラー変更 ~~~~ */

    /* height＝サブ画像の高さ */ 
    var height = $(".fv__sub__img").height()
    /* scroll＝スクロール分の高さ */ 
    var scroll = $(this).scrollTop() + 50; 
    
    /* サブ画像高をスクロール高が超えたら色を変えるif文 */ 
    if(height <= scroll) {
      $(".menu__text").css("color", "#000");
      $(".bar").css("background-color", "#000");
    } else {
      $(".menu__text").css("color", "#fff");
      $(".bar").css("background-color", "#fff");
    }
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */ 
  }); 

  /*======================================*/
  /*======================================*/ 
});
