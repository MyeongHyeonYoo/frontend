$(document).ready(function(){
  // 상단 고정
  $(window).scroll(function(){
    if($(this).scrollTop() > 40) {
      $("#main_navi_wrap").addClass("fixed1");
    }
    else {
      $("#main_navi_wrap").removeClass("fixed1");
    }
  });

  // top 버튼
  $(".top_btn").click(function(){
    $("html, body").stop().animate({scrollTop : 0}, 2000, "easeInBounce");
  });
});