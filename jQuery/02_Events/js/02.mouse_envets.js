$(document).ready(function(){
  // 1. click()
  $(".evt1").click(function(){
    $("#event").css("background", "#ccffff");
  });
  $(".evt1").dblclick(function(){
    $("#event").css("background", "");
  });
  // 2. dblclick()
  $(".evt2").dblclick(function(){
    $("#event").css("background", "#990066").text("더블 클릭!");
  });
  $(".evt2").click(function(){
    $("#event").css("background", "").text("이벤트");
  });
  
  // 3. mouseover(). mouseout()
  $(".evt3").mouseover(function(){
    $("#event").text("확인!!");
  });
  $(".evt3").mouseout(function(){
    $("#event").text("취소");
  });

  // 4. mouseover(). mouseout()
  $(".evt4").mouseover(function(){
    $("#event").css("width", "150px").text("");
  }).mouseout(function(){
    $("#event").css("width", "50px");
  });
 
  // 5. hover
  $(".evt5").hover(function(){
    $("#event").css("background", "url(images/img2.png)");
  }, function(){
    $("#event").css("background", "");
  });

    // 6. mousedown() .mouse()
    $(".evt6").mousedown(function(){
      $("#event").css("background", "url(images/img4.png) no-repeat center").text("");
    }).mouseup(function(){
      $("#event").css("background", "url(images/img5.png");
    });

    // 7. mouseenter() mouseleave()
    $(".evt7").mouseenter(function(){
      $("#event").css("background", "url(images/img2.png)");
    }).mouseleave(function(){
      $("#event").css("background", "url(images/img5.png");
    });

    // 8. contextmenu()
    $(".evt8").contextmenu(function(){
      $("#event").css({background: "green"});
    }); 

    // 9. focusin() focusout()
    $(".evt9").focusin(function(){
      $("#event").css("border-width", "5px");
    }).focusout(function(){
      $("#event").css("border-width", "");
    });
    
    // 10. mousemove()
    $(document).mousemove(function(event){
      $(".evt10 span").text("x좌표 : " + event.pageX + ", y좌표 : " + event.pageY);
    });

    // menu
    $(".menu li a:first").css({
      textDecoration: "underline",
      color: "#ff0000"
    });
    $(".menu li a").click(function(){
        $(".menu li a").css({textDecoration: "",
        color: ""
      });
        $(this).css({textDecoration: "underline",
        color: "#ff0000"
      });
    });
});