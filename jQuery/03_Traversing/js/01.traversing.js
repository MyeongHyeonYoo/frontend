$(document).ready(function(){
  // .first()
  // $("#main1 p").first().css("background", "#ccc"); // middle2의 p
  // $("#main1 p:first").css("background", "#ccc"); // middle2의 p
  // $("#main1 > p").css("background", "#ffcc33"); // p1 p2 p3 p4

  // .last()
  // $("#main1 p").last().css({background: "#ffcc33"}); // sub1의 p
  // $("#main1 p:last").css({background: "#ffcc33"}); // sub1의 p

  // .eq()
  // $("#main1 p").eq(2).css("background", "#ffcc33"); // p2

  // .filter()
  // $("#main1 div").filter(".middle2").text("middle2 적용"); //middle2 div의 텍스트 변경

  // not()
  // $("#main1 div").not("#sub1").hide(); // sub1만 제외하고 모든 div 숨기기

  // .slice
  // $("#slice1 p").slice(1, 5).css({background: "#ff99ff"}); // 2 ~ 5
  // $("#slice1 p").slice(2).css({borderWidth: "4px", borderColor: "#cc0033"}); // 3 ~ 10\
  // $("#slice1 p").slice(-5).css("color", "green").css("font-weight", "bold"); // 끝에서 5개 | 6 ~ 10 

  // .find()
  // $("#main2").find("p").css("background", "#ff99ff"); // box2의 p, p1, p2

  // .children()
  // $("#main2").children("p").css("background", "#ff9900"); // p1, p2

  // .closest()
  // $("p.txt2").closest("div").css({background: "#ff9900"}); // div
  // $("p.txt2").closest("#main2").css({background: "#ff9900"}); // div // 직접 지정

  // .prev()
  // $("p.txt3").prev().css("background", "#ff9900"); // p2
  
  // .prevAll()
  // $("p.txt3").prevAll().css("background", "#ff9900"); // div, p1, p2

  // .next()
  // $("p.part3").next().css("background", "#ff9900"); // p2

  // .nextAll()
  // $("p.part3").nextAll().css("background", "#ff9900"); // p2, p3

  // .siblings()
  // $("p.part3").siblings().css("background", "#ff9900"); // div, p2, p3

  // .nextUntil()
  // $("#main4 h2").nextUntil("#main4 h5").css({color: "#cc0033", border: "2px solid #cc0033"});

  // .parent()
  // $("#main4 span").parent().css({color: "#cc0033", border: "2px solid #cc0033"}); //#main4
  // $("#main5 span").parent().css({color: "green", border: "2px solid green"}); // #main5의 li p

  // .parents()
  // $("#main5 span").parents().css({color: "green", border: "2px solid green"}); // 상위 전체
  // $("#main5 span").parents("ul").css({color: "green", border: "2px solid green"}); // 상위 ul
  // $("#main5 span").parents("div").css({color: "green", border: "2px solid green"}); // 상위 div

  // .parentsUntil()
  // $("#main5 span").parentsUntil("div").css({"color": "green", "border": "2px solid green"}); //li, p

  // .add()
  $(".btn1").click(function() { // 확인 1
    $("#main6 div").css("background", "#ff9933");
  });
  $(".btn2").click(function() { // 확인 2
    $("#main6 div").add("#main6 span").css("background", "#ccffcc"); // div + span에 적용
  });
  $(".btn3").click(function() { // 확인 3
    $("#main6 div").add("#main6 span").add("#main6 p").css("background", "#66ff99"); // div + span + p에 적용
  });

  $(".btn4").click(function() { // 해제
    $("#main6 div, #main6 span, #main6 p").css("background", "transparent");
  });
});