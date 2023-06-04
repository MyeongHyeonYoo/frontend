$(document).ready(function(){
  $(".submenu").hide();
  $("#menu > li").hover(function(){
    $(this).children("ul").stop().fadeIn("fast"); // this -> li 가리킨다.
  },function(){
    $(this).children("ul").stop().fadeOut("fast");
  });
});