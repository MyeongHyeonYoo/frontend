$(document).ready(function(){
  // #notice li 개수
  // .langth
  var w = 320 * $("#notice li").size() + "px"; // .size selector 개수
  // var w = 320 * $("#notice li").length + "px";
  $("#notice").css("width", w);
  // console.log(w); // 320 * 6
  $("#notice li:last").prependTo("#notice"); // 마지막 li를 맨 앞으로 이동
  $("#notice").css("margin-left", "-320px");

  $(".prev_btn").click(function(){ // <
    $("#notice:not(:animated)")
      .animate({marginLeft : parseInt($("#notice").css("margin-left")) - 320 + "px"}, "slow", "swing", function(){
        $("#notice li:first").appendTo("#notice"); //맨 앞 li를 맨 뒤로 이동
        $("#notice").css("margin-left", "-320px");
      }); //swing -> default
  });
  $(".next_btn").click(function(){ // >
    $("#notice:not(:animated)")
      .animate({marginLeft : parseInt($("#notice").css("margin-left")) + 320 + "px"}, "slow", "swing", function(){
        $("#notice li:last").prependTo("#notice"); //맨 앞 li를 맨 뒤로 이동
        $("#notice").css("margin-left", "-320px");
      }); //swing -> default
  });
});