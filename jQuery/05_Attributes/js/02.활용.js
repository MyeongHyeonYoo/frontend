$(document).ready(function(){
  // ex1
  // $("#main_navi ul li a").mouseover(function(){
  //   $(this).text("aaaaa");
  // }).mouseout(function(){
  //   $(this).text(""); // text 초기화를 이런 식으로 할 수 있는데 , 코드가 길어질 수 있다.
  // });
  $("#main_navi ul li a").mouseover(function(){
    var over1 = $(this).attr("data-atitle");
    $(this).text(over1);
  }).mouseout(function(){
    var out1 = $(this).attr("data-btitle");
    $(this).text(out1);
  });

  // ex2
  //icon_all 첫번째 이미지의 src 변경
  $("#icon_all li:first a img").attr("src", "images/btn_on.png");
  $("#icon_all li a img").bind("click", function(){
    $("#icon_all li a img").attr("src", "images/btn_off.png");
    $(this).attr("src", "images/btn_on.png");
  });
  $(".btn1").bind("click", function(){
    $(".banner img").attr("src", "images/main1.jpg");
    return false; // 페이지 이벤트 시 올라가는 것 개선.
  });
  $(".btn2").bind("click", function(){
    $(".banner img").attr("src", "images/main2.jpg");
    return false;
  });
  $(".btn3").bind("click", function(){
    $(".banner img").attr("src", "images/main3.jpg");
    return false;
  });
});