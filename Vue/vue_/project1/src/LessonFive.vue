<template>
  <div>
    <hr>
    <div>
      <p>LessonFive.vue파일입니다.</p>
      <div>
        <!-- 자식요소에서 부모요소의 데이터를 가져다 쓸 수 없다.(다만 v-bind 등 방법으로 가능.) -->
        <p>프로그램 : {{web}}</p>
        <p>프로그램1 : {{web[0]}}</p>
        <p>프로그램2 : {{web[1]}}</p>
        <p>프로그램3 : {{web[2]}}</p>
        <p>프로그램4 : {{web[3]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : { // props : {데이터 이름 : 자료형 이름} String, Array, Number
    web : Array,
  }
}
</script>

<style>

</style>