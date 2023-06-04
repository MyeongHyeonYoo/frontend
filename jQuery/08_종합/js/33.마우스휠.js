$(document).ready(function(){
  //wrap
  $("#wrap").on("mousewheel", function(event, delta){
    // console.log(delta); // 1: 위 | -1: 아래
    if (delta > 0) { //휠 위로
      $("#wrap p img").attr("src", "images/img12_l.jpg");
    }
    else { // 휠 아래로
      $("#wrap p img").attr("src", "images/img10_l.jpg");
    }
    return false; // 기본적인 마우스휠 기능 제거
  });

  //wrap2
  $("#wrap2").on("mousewheel", function(event, delta){
    if (delta > 0) {
      $("#wrap2").scrollTop($("#wrap2").scrollTop() + 280);
    }
    else {
      $("#wrap2").scrollTop($("#wrap2").scrollTop() - 280);
    }
    return false;
  });

  //wrap3
  $("#wrap3").on("mousewheel", function(event, delta){
    if (delta > 0) {
      $("#wrap3").scrollLeft($("#wrap3").scrollLeft() + 300);
    }
    else {
      $("#wrap3").scrollLeft($("#wrap3").scrollLeft() - 300);
    }
    return false;
  });

  //wrap4
  $("#wrap4").on("mousewheel", function(event, delta){
    if (delta > 0) {
      $("#wrap4").stop().animate({scrollLeft: $("#wrap4").scrollLeft() + 600}, 500);
    }
    else {
      $("#wrap4").stop().animate({scrollLeft: $("#wrap4").scrollLeft() - 600}, 500);
    }
    return false;
  });

  //wrap5
  $("#wrap5").on("mousewheel", function(event, delta){
    if (delta > 0) {
      $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop() + 50);
    }
    else {
      $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop() - 50);

    }
    return false;
  });
});