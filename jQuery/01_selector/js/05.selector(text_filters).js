$(document).ready(function(){
  // :contains()
  $("#ex1 ul li:contains('123')").css("color", "blue");

  // // : empty
  $("#ex2 ul li:empty")
    .css("background", "#ff66cc")
    .text("jQuery")
    .css("color", "#fff");

  // // :parent
  $("#ex3 ul li:parent").text("parent");

  // // :has()
  $("#ex4 div:has(h3)").css("border", "5px solid brown"); // h3이 있는 div에 적용
  $("#ex4 div:not(:has(h2)").css("background", "tomato"); // h3이 있는 div에 적용
});