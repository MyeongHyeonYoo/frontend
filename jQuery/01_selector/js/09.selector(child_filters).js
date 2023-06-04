$(document).ready(function() {
  // :nth-of-type()
  // $("#ex1 ul li:nth-of-type(2)").css("background-color", "#ff9933") // 2,  7
  // $("#ex2 > p:nth-of-type(2)").css("background-color", "#ff9933"); // p2
  // $("#ex2 p:nth-of-type(2)").css("color", "blue");

  // :only-child
  // $("#ex3 .list3 li strong:only-child").css("background-color", "#ff9933"); // 1개
  // $("strong:only-child").css("color", "pink"); // 2개

  // :only-of-type
  // $("#ex3 .list3 li strong:only-of-type").css("border", "1px solid green"); // 2개
  // $("strong:only-of-type").css("font-size", "10px") // 3개
});
