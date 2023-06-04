$(document).ready(function(){
  $("#faq dd:not(:first)").hide();
  $("#faq dt:first a").addClass("selected");

  $("#faq dt a").click(function(){
    $("#faq dt a").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).parent().next().css("display") == "none") {
      $("#faq dd").slideUp("fast");
      $(".star_wrap img").attr("src", "images/star1.png");
    }
    $(this).parent().next().slideDown("fast"); // 클릭한 a부모(dt) 뒤에 있는 dd
  });
  // 별첨
  $(".star_wrap img").click(function(){
    $(".star_wrap img").attr("src", "images/star1.png");
    $(this).attr("src", "images/star2.png");
    $(this).prevAll().attr("src", "images/star2.png");
  });
});