$(document).ready(function(){
  // ex1
  $(".btn1_1").click(function(){ // <
    // 맨 처음 이미지를 .photo1 안에서 맨 뒤로 이동
    $(".photo1 img:first").appendTo( $(".photo1"));
  });
  $(".btn1_2").click(function(){ // >
    // 맨 마지막 이미지를 .photo1 안에서 맨 앞으로 이동
    $(".photo1 img:last").prependTo( $(".photo1"));
  });

  // ex2
  $(".btn2_1, .btn2_2").hide();
  // $(".pohto2").mouseover(function(){
  $("#ex2").mouseover(function(){ // 최 상위 부모에게~
    $(".btn2_1, .btn2_2").show();
  }).mouseout(function(){
    $(".btn2_1, .btn2_2").hide();
  });
  $(".btn2_1").click(function(){ // <
    // 맨 처음 이미지를 .photo2 안에서 맨 뒤로 이동
    $(".photo2 img:first").appendTo( $(".photo2"));
  });
  $(".btn2_2").click(function(){ // >
    // 맨 마지막 이미지를 .photo2 안에서 맨 앞으로 이동
    $(".photo2 img:last").prependTo( $(".photo2"));
  });
});