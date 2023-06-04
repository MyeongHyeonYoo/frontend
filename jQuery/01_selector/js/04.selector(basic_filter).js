$(document).ready(function() {
  // :eq()
  // $("#ex1 p:eq(1)").css("border", "1px solid #ff6666"); //내용 p2
  // $("#ex2 ul li:eq(0)").css("background", "#ff6666"); // li 1
  // $("#ex2 ul li:eq(5)").css("background", "#ff6666"); // li 6
  // $("#ex2 .list2 li:eq(0)").css("background", "#ff6666"); // li 6

  // :gt()
  // $("#ex2 ul li:gt(4)").css("background-color", "orange");

  // lt()
  // $("#ex2 ul li:lt(3)").css("background", "pink");

  // :first | :last
  // $("#ex2 ul li:first").css("background", "pink"); //li 1
  // $("#ex2 ul li:last").css("background", "orange"); //li 10

  // :even | :odd
  // $("#ex2 ul li:even").css("background","pink"); //li 1, 3, 5, 7, 9
  // $("#ex2 ul li:odd").text("홀수번째 li").css("color","red"); //li 2, 4, 6, 8, 10

  // : not()
  // 첫번째 li제외하고 배경색, 글자색
  // $("#ex2 ul li:not(:first)").css({background: "#d8d8a2", color: "#ea1eea"});

  // :header
  // $("#ex1 :header").css("text-decoration", "underline"); // 제목 h1, 제목 h2
  // $("section *:header").text("header 테스트").css("color", "#6666ff");

  // // :root
  // $(":root").css("border", "1px solid #ff66cc");

  // // :lang()
  // $("#ex3 p:lang(en)").css("background", "yellow");

  // gallery
  // 1. 마지막 번째 li화면에서 숨기기
  // $("#gallery ol li:last").css("display", "none");
  // $("#gallery ol li:last").css("visibility", "hidden");

  // 2. (3)번 제외한 li 숨기기
  // $("#gallery ol li:not(:eq(2))").css("display", "none");
  // $("#gallery ol li:not(:eq(2))").css("visibility", "hidden");

  // 3. (2, 4, 6, 8, 10)번 제외한 li 숨기기
  // $("#gallery ol li:odd").css("display", "none"); // html 2, 4, 6, 8, 10, 숨기기
  // $("#gallery ol li:not(:odd)").css("display", "none"); // 인덱스 1, 3, 5, 7, 9 숨기기

  // 4. (1, 2, 3, 4)번 li 숨기기
  // $("#gallery ol li:lt(4)").css("display", "none");

  // 5. (7, 8, 9, 10)번  li 숨기기
  // $("#gallery ol li:gt(5)").css("display", "none");

});