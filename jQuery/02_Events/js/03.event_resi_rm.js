$(document).ready(function(){
  // .evt1 - click 이벤트 등록
  $(".evt1").click(function(){ // 확인 1
    alert("evt1 이벤트");
  });

  // .evt2, .evt3 - 이벤트 등록
  function event1() {
    alert("Hello!!");
  }
  $(".evt2").click(event1); // 확인 2
  $(".evt3").contextmenu(event1); // 확인 3

  // .evt4 - 이벤트 등록 
  $(".evt4").bind("dblclick mouseout", function() { // 확인 4
    $(this).text("Hi ! ! ! !");
  });
  
  // .evt5 - 이벤트 등록
  $(".evt5").on("click mouseout", function(){ // 확인 5
    alert("on test");
  });

  // .evt4 - dblclick 이벤트 제거
  $(".evt4").unbind("dblclick");

  // .evt5 - click 이벤트 제거
  $(".evt5").off("click");
});