$(document).ready(function(){

  var li_w = $(".food li").width(); 
  var w = li_w * $(".food li").size() + "px"; 
  $(".food").css("width", w);
  $(".food li:last").prependTo(".food"); 
  $(".food").css("margin-left", - li_w + "px");

 
  $(".prev").click(function(){ // <
    $(".food:not(:animated)")
      .animate({marginLeft : parseInt($(".food").css("margin-left")) - li_w + "px"}, "slow", "swing", function(){
        $(".food li:first").appendTo(".food");
        $(".food").css("margin-left", - li_w + "px");
      });
  });
  $(".next").click(function(){ // >
    $(".food:not(:animated)")
      .animate({marginLeft : parseInt($(".food").css("margin-left")) + li_w + "px"}, "slow", "swing", function(){
        $(".food li:last").prependTo(".food"); 
        $(".food").css("margin-left", - li_w + "px");
      });
  });
  
});