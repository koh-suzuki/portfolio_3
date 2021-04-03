$(function() {
  /*--------------------------------------------------*/
  /*    ハンバーガーメニューとスライドメニュー
  /*--------------------------------------------------*/ 
  var nav = $(".header__nav"),
      outerWidth = nav.outerWidth()
      overray = $(".menu__overray"),
      menu = $(".menu")
  /* height＝サブ画像の高さ */ 
  var height = $(".fv__sub").height()
  
  $(".menu__wrapper").click(function() {
    /* ハンバーガーメニュー(hgm)の開閉 */ 
    menu.toggleClass("open");
 
    /* スライドメニューの開閉 */ 
    $("body").toggleClass("open");
    if(menu.hasClass("open")) {
      /* openクラスがhgmについていればスライドメニュー表示とhmgの色変更 */ 
      overray.fadeIn(200);
      nav.stop().animate({"right": 0}, 200,);
      $(".menu__text").css("color", "#fff");
      $(".bar").css("background-color", "#fff");
    } 
    /******************************************* / 
    /* サブ画像の下でhgm開閉をすると
    /* hgmと背景の色同化が起こるのを防ぐ 
    /********************************************/ 
    /* ハンバーガーメニュー(hgm)の位置とサブ画像の高さを比べる */
    else if ((height <= menu.offset().top)){
      overray.fadeOut(200);
      nav.stop().animate({"right": - outerWidth}, 200,);
      /* hgmの位置がサブ画像の高さより大きい数値の時hgmの色を変更 */ 
      $(".menu__text").css("color", "#000");
      $(".bar").css("background-color", "#000");
    } 
    else{
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
      $(".a").css("fill", "#000");
    } else {
      $(".site__logo__main, .site__logo__inc").css("color", "#fff");
      $(".a").css("fill", "#fff");
    }
    
  /* ~~~~ ハンバーガーメニューのカラー変更 ~~~~ */

    /* height＝サブ画像の高さ */ 
    var height = $(".fv__sub").height()
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

    if((height <= scroll) && (menu.hasClass("open"))){
      $(".menu__text").css("color", "#fff");
      $(".bar").css("background-color", "#fff");
    } else if((height <= scroll) && (menu.hasClass("open"))) {
        $(".menu__text").css("color", "#000");
        $(".bar").css("background-color", "#000");
    } 
  }); 

  /*======================================*/
  /*======================================*/ 

});
