$(document).ready(function(){
  $(".show1").text(parseInt("12.78")); /* 소수점 아래 버림 */
  $(".show2").text(parseInt("12 78")); /* 공백이 있으면 앞 숫자만 */
  $(".show3").text(parseInt("5 비와")); /* 숫자 + 문자 -> 숫자만 */
  $(".show4").text(parseInt("비가 5")); /* 문자 + 숫자 NaN(Not a Number) */

  // $(selector).resize() : 브라우저 창 크기가 변경될 때 발생(Browser Events)
  $(window).resize(function(){
    var w = parseInt($(this).width());
    $(".txt span").text(w);
    if(w >= 1024) {
      $(".photo img").attr("src", "images/banner1.jpg").css("border-color", "red");
    }
    else if (w >= 761 && w < 1024) { // 761 ~ 1023
      $(".photo img").attr("src", "images/banner2.jpg").css("border-color", "blue");
    }
    else  {
      $(".photo img").attr("src", "images/banner3.jpg").css("border-color", "pink");
    }
  }).resize(); // 움직여야만 사이즈 반환 하는 것을 여기 .resize() 추가하면서  브라우저에 바로 사이즈 반환
});