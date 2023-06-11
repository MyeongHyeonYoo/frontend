<template>
  <div>
    <input placeholder="입력하세요!!" v-model="message">
    <p> 메세지 : {{message}} </p>
    <hr>

    <p><span>여러 줄 : </span></p>
    <p style="white-space:pre-line">{{message2}}</p>
    <br>
    <textarea cols="50" rows="10" v-model="message2" placeholder="입력하세요."></textarea>
    <hr>

    <input type="checkbox" id="chk" v-model="checked">
    <label for="chk">{{checked}}</label>
    <hr>

    <input type="checkbox" id="web1" value="web1" v-model="checkedNames" />
    <label for="web1">web1</label>
    <input type="checkbox" id="web2" value="web2" v-model="checkedNames" />
    <label for="web2">web2</label>
    <input type="checkbox" id="web3" value="web3" v-model="checkedNames" />
    <label for="web3">web3</label>
    <br><br>
    <span>선택한 과목 : {{checkedNames}} </span>
    <hr>
    <div>
      <input type="radio" id="one" value="web1" v-model="checkedNames2">
      <label for="one">One</label>
      <input type="radio" id="two" value="web2" v-model="checkedNames2">
      <label for="two">Two</label>
      <br><br>
      <span>선택한 과목 :  {{checkedNames2}} </span>
    </div>
    <hr>
    <div>
      <select v-model="selected">
        <option disabled value="">선택하세요.</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>선택 : {{selected}}</span>
    </div>
    <div>
      <select v-model="selected2" multiple size="5">
        <option disabled value="">선택하세요.</option>
        <option>web1</option>
        <option>web2</option>
        <option>web3</option>
        <option>web4</option>
        <option>web5</option>
      </select>
      <span>선택 : {{selected2}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      message : "",
      message2 : "",
      checked : false,
      checkedNames : [],
      checkedNames2: [],
      selected : "",
      selected2 : "",
    }
  },
}
</script>

<style>

</style>