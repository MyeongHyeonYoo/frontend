$(document).ready(function(){
  // ex1
  $(".num_btn").toggle(function(){
    $(".num_i").attr("src", "images/number5.png");
  }, function(){
    $(".num_i").attr("src", "images/number4.png");
  }, function(){
    $(".num_i").attr("src", "images/number3.png");
  }, function(){
    $(".num_i").attr("src", "images/number2.png");
  }, function(){
    $(".num_i").attr("src", "images/number1.png");
  });

  // ex2
  $(".box").click(function(){
    $(this).css("border-color", "#cc0066");
  });
  $(".evt").click(function(){
    $(this).css("border-style", "dashed");
    event.stopPropagation(); // return false // -> 써도 똑같은 효과(차단) 발생
  });
  
  // ex3, ex4
  $("#ex3").mouseover(function(){
    $("#ex3 p").css("background-color", "green");
  }).mouseout(function(){
    $("#ex3 p").css("border", "3px solid #ff0000");
  });

  $("#ex4").mouseenter(function(){
    $("#ex4 p").css("background-color", "green");
  }).mouseleave(function(){
    $("#ex4 p").css("border", "3px solid #ff0000");
  });
}); 