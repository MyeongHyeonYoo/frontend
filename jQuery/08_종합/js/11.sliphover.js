$(document).ready(function(){
  // wrap1
  $("#container1").sliphover({

  });
  // wrap2
  $("#container2").sliphover({
    backgroundColor : "#9999ff" // 배경색 // alpha 좀 들어가 있다.
    // backgroundColor : "rgba(0, 0, 0, 0.9)";
  });
  // wrap3
  $("#container3").sliphover({
    fontColor : "crimson" // 글자색
  });
  // wrap4
  $("#container4").sliphover({
    textAlign : "left", // 왼쪽 정렬
    verticalMiddle : false // 위쪽 정렬
  });
  // wrap5
  $("#container5").sliphover({
    withLink : false // 링크(손모양) 해제
  });
});