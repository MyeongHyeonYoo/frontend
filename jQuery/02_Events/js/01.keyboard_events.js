$(document).ready(function(){
  // 이메일
  $("#name").keydown(function(){
    $("#name").css("background", "#cccc33");
  });
  $("#name").keyup(function(){
    // $("#name").css("background", "");
    $(this).css("background", "");
  });

  // 이메일
  var i = 0;
  // 키보드 누른 키 횟수 증가.
  $("#email1").keydown(function(){
    $(".txt1").text(i += 1);
  });

  // 키보드 누른 키 횟수 증가(alt, ctrl, shift, esc 한글, f1~f12 적용x).
  var j = 0;
  $("#email2").keypress(function(){
    $(".txt2").text(j += 1);
  });
});