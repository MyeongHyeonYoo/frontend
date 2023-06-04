$(document).ready(function() {
  // [name]
  // $("#txt p[class]").css("border", "2px dotted #cc0033"); // js2, 3, 5
  // $("#link1 a[id][title]").css("border", "2px dotted #cc0033"); // 확인1, 2, 3, 4

  // [name="value"]
  // $("#link1 a[target='_blank']").css("border", "2px dotted #cc0033"); // 확인1, 2, 4

  // [name=^"value"]
  // $("#link1 a[href^='https']").css("border", "2px dotted #cc0033"); // 확인1, 4

  // [name$="value"]
  // $("#txt p[class$='css1']").css("border", "2px dotted #cc0033"); // js2, js3, js5

  // [name*="value"]
  // $("#link1 a[target*='n']").css("border", "2px dotted #cc0033"); // 확인1, 2, 4
  
  // [name!="value"]
  // $("#gallery img[src!='images/img3.gif']").css("border", "2px dotted #cc0033"); // 확인1, 2, 4

  // [name|="value"]
  // $("#txt p[id|='html_1']").css("border", "2px dotted #cc0033"); // js1, 4

  // [name~="value"]
  // $("#txt p[class~='css1']").css("border", "2px dotted #cc0033"); // js2, 3, 5
});