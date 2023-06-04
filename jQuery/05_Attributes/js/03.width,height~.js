$(document).ready(function(){
  // ex1
  $("#ex1 p").click(function(){
    //border: 3px solid #cc6699; width: 300px; height: 200px; padding: 5px;
    alert("width :" + $(this).width() + "px"); // 300
    alert("height :" + $(this).height() + "px"); // 200
  });

  // ex2
  $("#ex2 p").click(function(){
    //border: 3px solid red; width: 500px; height: 300px; padding: 5px;
    alert("innerWidth :" + $(this).innerWidth() + "px"); // w500 + p10 = 510
    alert("innerHeight :" + $(this).innerHeight() + "px"); // h300 + p10 = 310
  });

  // ex3
  $("#ex3 p").click(function(){
    //border: 3px solid red; width: 100px; height: 120px; padding: 5px; margin: 8px;
    alert("outerWidth :" + $(this).outerWidth() + "px"); // w100 + p10 + b6 = 116
    alert("outerWidth :" + $(this).outerWidth(true) + "px"); // w100 + p10 + b6 + m16 = 132
  });
  
  // ex4
  //border: 3px solid blue; width: 100px; height: 120px; padding: 5px; margin: 8px;
  $("#ex4 p").click(function(){
  alert("outerHeight :" + $(this).outerHeight() + "px"); // h120 + p10 + b6 = 136;
  alert("outerHeight :" + $(this).outerHeight(true) + "px"); // h120 + p10 + b6 + m16 = 152;
  });

  // ex5
  $("#ex5 img").click(function(){
    var pos_img = $(this).position();
    alert("이미지의 position-left 위치 : " + pos_img.left + ", 이미지의 position-top 위치 : " + pos_img.top);
  });

  // ex6
  $("#ex6 button").click(function(){
    var offset1 = $(this).offset();
    alert("left : " + offset1.left + ", top : " + offset1.top); // left: 0, top: 1440 // 약간 씩 차이 있다.
  });
});