function banner(){
  $(".food:not(:animated)")
    .animate({marginLeft : parseInt($(".food").css("margin-left")) - 240 + "px"}, "slow", "swing", function(){
      $(".food li:first").appendTo(".food");
      $(".food").css("margin-left", "-240px");
    });
}

$(document).ready(function(){
  var w = 240 * $(".food li").size() + "px"; 
  $(".food").css("width", w);
  $(".food li:last").prependTo(".food"); 
  $(".food").css("margin-left", "-240px");

  var banner = setInterval("banner()", 5000);
 
  $(".food li").mouseover(function(){
    clearInterval(banner);
    $(this).find("img").css("opacity", ".5");
    alert("멈췄나요?");
  }).mouseout(function(){
    banner = setInterval("banner()", 5000);
    $(this).find("img").css("opacity", "1");
  }); 
});