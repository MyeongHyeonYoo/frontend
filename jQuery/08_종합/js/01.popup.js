$(document).ready(function(){
  $(".popup").click(function(){
    var href1 = $(this).attr("href");
    window.open(href1, "그래픽", "width=800px, height=500px, left=100, top=100"); // 브라우저마다 위치 좀 안 맞을 수 있다.
    return false;
  });
});