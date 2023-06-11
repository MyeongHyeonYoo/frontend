<template>
  <article id="list_wrap2">
    <h2>모바일웹이란?</h2>
    <dl>
      <dt>모바일 웹</dt>
      <dd>스마트폰을 통해 검색하는 웹 페이지</dd>
      <dt>대표적인 모바일 웹 브라우저</dt>
      <dd>아이폰 사파리</dd>
      <dd>안드로이드 기본 브라우저</dd>
      <dd>모바일웹기술</dd>
      <dd>HTML5</dd>
      <dd>CSS3</dd>
      <dd>자바스크립트</dd>
      <dd>jQuery Mobile</dd>
    </dl>
  </article>
</template>

<script>
export default {

}
</script>

<style>
#list_wrap2 {
  clear: both;
  height: 600px;
}
#list_wrap2 h2 {
  font-size: 20px;
  letter-spacing: -1px;
  margin: 30px 0 20px 20px;
}
#list_wrap2 dl {
  margin-left: 10px;
  line-height: 2em;
  background: url(../assets/images/bg_mobile.png) no-repeat right bottom;
}
#list_wrap2 dl dt {
  color: #c62700;
  font-weight: bold;
  background: url(../assets/images/subtit_bg.png) no-repeat left center;
  padding-left: 15px;
  margin: 15px;
  font-size: 14px;
}
#list_wrap2 dl dd {
  font-size: 13px;
}
#list_wrap2 dl dd::before {
  content: "- ";
}
</style>