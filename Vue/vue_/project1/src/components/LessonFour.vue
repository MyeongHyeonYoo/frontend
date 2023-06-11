<template>
  <div>
    <hr>
    <div>
      <h4 :style="red">{{data[0].title}}</h4>
      <P>{{data[0].price}}</P>
      <P>{{data[0].content}}</P>
    </div>
    <div>
      <h4 :style="red">{{data[1].title}}</h4>
      <P>{{data[1].price}}</P>
      <P>{{data[1].content}}</P>
    </div>
    <div>
      <h4 :style="red">{{data[2].title}}</h4>
      <P>{{data[2].price}}</P>
      <P>{{data[2].content}}</P>
    </div>
    <hr>
    <div v-for="(list, i) in data" :key="i">
      <h4 :style="red">{{data[i].title}}</h4>
      <P>{{data[i].price}}</P>
      <P>{{data[i].content}}</P>
    </div>
    <hr>
    <div v-for="(list, i) in data" :key="i">
      <h4 :style="red">{{list.title}}</h4>
      <P>{{list.price}}</P>
      <P>{{list.content}}</P>
    </div>
    

  </div>

</template>

<script>
import data from '../assets/information.js';
export default {
  data() {
    return {
      data : data,
      red : 'color: red'
    }
  }
}
</script>

<style>

</style>