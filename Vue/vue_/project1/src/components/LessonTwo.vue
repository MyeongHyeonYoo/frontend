<template>
  <div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
      <li>menu3</li>
      <li>menu4</li>
    </ul>
    <hr>
    <ul class="menu">
      <li>{{Menu[0]}}</li>
      <li>{{Menu[1]}}</li>
      <li>{{Menu[2]}}</li>
      <li>{{Menu[3]}}</li>
    </ul>
    <hr>
    <!-- 반복문 v-for="작명" in 반복할 횟수 :ket="작명" -->
    <ul class="menu">
      <li v-for="i in 4" :key="i">{{Menu}}</li>
    </ul>
    <hr>
    <ul class="menu">
      <li v-for="i in 4" :key="i">{{i}}</li>
    </ul>
    <hr>
    <ul class="menu">
      <li v-for="i in Menu" :key="i">{{i}}</li>
    </ul>
    <hr>
    
    <!-- v-for="(작명, i) in 반복할 횟수" :key="i" 왼쪽 변수는 array내의 데이터 / 오른쪽 변수는 1씨 증가하는 정수 -->
    <ul class="menu">
      <li v-for="(Menu, i) in Menu" :key="i">{{i}}</li>
    </ul>
    <hr>
    <ul class="menu">
      <li v-for="(Menu, i) in Menu" :key="i">{{Menu}}</li>
    </ul>
    <hr>

    <!-- div 3개 출력 / div 안에 데이터는 제목1, 제목2, 제목3 -->
    <!-- <div class="box">
      <h6 v-for="i in Title" :key="i">{{i}}</h6>
    </div> -->
    <div class="box" v-for="(Title, i) in Title" :key="i">
      <h6>{{Title[i]}}</h6>
    </div> <!-- 제 목 3 -->
    <div class="box" v-for="(Title, i) in Title" :key="i">
      <h6>{{Title}}</h6>
    </div> <!-- 제목1, 제목2 ,제목3 -->
    <div class="box" v-for="(titles, i) in Title" :key="i">
      <h6>{{Title[i]}}</h6>
    </div> <!-- 제목1, 제목2 ,제목3 -->
  </div>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      Menu : ["Menu1", "Menu2", "Menu3", "Menu4"],
      Title: ['제목1' , '제목2', '제목3'],
    }
  },
}
</script>

<style>
  .menu {
    list-style: none;
    height: 30px;
    background-color: orange;
    padding-top: 10px;
  }
  .menu li {
    float: left;
    margin: 0 20px;
  }
  hr {
    clear: both;
  }
  
  .box {
    border: 1px solid green;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 25px;
    float: left;
    margin: 10px;
  }
</style>