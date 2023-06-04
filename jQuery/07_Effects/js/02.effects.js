$(document).ready(function(){
  // ex1
  $(".photo").hide();
  $(".btn1").click(function() { // fafdeIn
    $(".photo").fadeIn(1000);
  });
  $(".btn2").click(function() { // fafdeOut
    $(".photo").fadeOut(1000);
  });
  $(".btn3").click(function() { // fadeTo
    $(".photo").fadeTo("slow", 0.4);
  });
  $(".btn4").click(function() { // fadeToggle
    // $(".photo").fadeToggle(1000);
    $(".photo:not(:animated)").fadeToggle(1000);
  });
  $(".btn5").click(function() { // 
    $(".photo").fadeIn(1000, function(){
      $(".photo").fadeOut(1500);
    // $(this).fadeTo(1000, function(){ // this가 .photo -> 이렇게 써도 된다.
    //   $(this).fadeOut(1500); // this가 .photo -> 이렇게 써도 된다.
    });
  });

  // ex2 
  $(".ex2_i").mouseover(function(){
    $(".out1", this).fadeOut(); // this는 p -> 마우스 안에 있는 p태그 설정(this로)
  });
  $(".over1").mouseout(function(){
    $(".out1").fadeIn();
  });

  // ex3
  $(".ex3_i")
    .animate({left: "60%"}, 1000) // 각 줄로 따로 따로 쓰면 코드 순으로 적용(.animate 각각 지정)
    .animate({top: "60%"}, 500)
    .animate({left: "0%"}, 1000)
    .animate({top: "0%"}, 500);

  // ex4
  $(".ex4_i")
  .animate({left: "400px", opacity: "0.5"}, 2000) // 같이 쓰면 동시에 실행
  // .animate({left: "500px", opacity: "1"}, 1000) // 위 400 먹고 나머지 100 추가 진행
  .animate({left: /*"500px"*/"+=100px", opacity: "1"}, 1000) // 이렇게도 가능.(+= 연산자)
  .animate({ top: "+=150px"}, 500)
  .animate({ top: "-=50px"}, "fast")
  .animate({ left: "0"}, "1000")
  .animate({ top: "0"}, "slow");
});