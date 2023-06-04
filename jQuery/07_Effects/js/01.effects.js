$(document).ready(function(){

  // ex1
  $(".btn1").click(function(){
    $(".box1").show(1000);
    // $(".box1").show();
  });
  $(".btn2").click(function(){
    $(".box1").hide();
  });
  $(".btn3").click(function(){
    $(".box1").toggle();
  });
  $(".btn4").click(function(){
    $(".box1").show(1000, function(){
      alert("Hello!!");
    });
  });

   // ex2
   $(".btn5").click(function(){
    $(".box2").slideUp(700);
  });
  $(".btn6").click(function(){
    $(".box2").slideDown(700);
  });
  $(".btn7").click(function(){
    // $(".box2").slideToggle(700);
    $(".box2:not(:animated)").slideToggle(700);
  });
  $(".btn8").click(function(){
    $(".box2").slideUp(1000, function(){
      $(this).slideDown(1000)
    });
  });

  // ex3
  $(".list_li2 div").hide();
  $(".list_li2").toggle(function(){ // 상품신청
    $(".list_li2 div:not(:animated)").slideDown();
    $("#list_li2a").addClass("sel");
    $(".list_li2 span").text("-");
  }, function() {
    $(".list_li2 div:not(:animated)").slideUp();
    $("#list_li2a").removeClass("sel");
    $(".list_li2 span").text("+");
  });
}); 