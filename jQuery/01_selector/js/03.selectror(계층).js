$(document).ready(function(){
  
  // ex1 
  $("#ex1 >  p")
  .css("background", "url(images/img3.gif)")
  .css("width", "120px")
  .css("hegiht", "100px")
  .css("color", "#ff3333")
  .text("뽀로로");

  // ex2
  $("#ex2 p")
  .css({
    "border-bottom" : "3px double #9900cc", 
    "width" : "120px",
    "text-align" : "center"
  });

  // ex3
  $(".ex3_1 + li")
  .css("background", "url(images/img3.gif)"); // 2

  // ex4
  $(".ex4_2 ~ li")
  .css("background", "yellow"); // 3, 4, 5 
});

