$(document).ready(function() {
  // :hidden
  // 숨겨져 있는 p요소 3초동안 화면에 보이게 하라.
  $("#ex1 p:hidden").show(3000); // 웹접근성 2

  // 화면에 보이는 p요소를 2초동안 숨겨라.
  $("#ex1 p:visible").hide(2000); 
});

// ex2
// 3초 후 show()를 한 번만 실행해라.
function show() {
  $(".none_img:hidden").show(2000); // 숨김 이미지
  $(".none_img:first").hide(500); // 첫번째 이미지
  $(".none_img:first").show("fast"); // 숨김 이미지
}
setTimeout("show()", 2000);

