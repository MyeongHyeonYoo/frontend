$(document).ready(function(){
  // :first-child
  // $("#ex1 ul li:first-child").css("background", "crimson"); // 1, 6
  // $("#ex1 .list1 li:first-child").css("background", "salmon"); // 1
  // $("#ex1 .list1 li:first").css("background", "red"); // 1

  // :first-child
  // $("#ex1 ul li:last-child").css("background", "#cccc66"); // 5, 10

  // :nth-child(n)
  // $("#ex1 ul li:nth-child(4)").css("background", "blue"); // 4, 9
  // $("#ex1 ul li:nth-child(even)").css("background", "yellow"); // 2, 4 |  7, 9
  // $("#ex1 ul li:nth-child(odd)").css("background", "#512523"); // 1, 3, 5  |6, 8, 10
  // $("#ex1 ul li:nth-child(2n)").css("background", "#cc1232"); // 2, 4 | 7, 9

  // ex2
  // 1) 번호, 담당자, 비고 (글자색 #cc66ff)
  // $("#ex2 #web tr th:nth-child(odd)").css("color", "#cc66ff");

  // 2) 과목, 전화번호 (글자색 #66cc66)
  // $("#ex2 #web tr th:nth-child(even)").css("color", "#66cc66");

  // 3) 1, 3, 5, 7, 9번행 전체 (배경색 #ff9999 | 글자색 #990099)
  // $("#ex2 #web tr:nth-child(even)").css({background: "#ff9999", color: "#990099"});

  // 4) 2, 4, 6, 8, 10번행 전체 (배경색 #cc9933 | 글자색 #ff0066)
  // $("#ex2 #web tr:not(:first-child):nth-child(odd)").css({"background": "#cc9933", "color": "#ff0066"});

  // ex3
  // 1) 첫번째 p텍스트 변경 -> 1번 이미지
  // $("#ex3 #photo p:first-child").text("1번 이미지").css("background", "src='images/img1.gif'"); // .text 적용 이후 css 배경이미지 안 먹는다. (배경색은 적용 o)

  // 2) 짝수 이미지만 border적용 (점선 2px 붉은색 계열)
  // $("#ex3 #photo p:nth-child(even)").css("border", "2px dotted crimson");

  // 3) 4, 8 텍스트색 변경
  // $("#ex3 #photo p:nth-child(4n)").css("color", "skyblue").css("font-weight", "blod");

  // 4) 마지막 이미지의 크기를 3배로 커지게 변경
  // $("#ex3 #photo p:last-child img").css("width", "300%").css("height", "300%"); // transform: scale

  // 5) 6번에서 이미지만 숨기기
  // $("#ex3 #photo p:nth-child(6) img").css("visibility", "hidden");//.css("display", "none"); 
});