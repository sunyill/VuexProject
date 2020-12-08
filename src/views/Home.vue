<template>
  <div class="home">
    this is my first VuexPage
    <hr>
    {{$store.state.msg}}
    <hr>
    --{{$store.getters.handleData}}
    <hr>
    最后处理数据-{{handleLastData}}
    <hr>
    <div>{{this.$store.state.count}}</div>
    <input type="button" name="" id="" value="点击增加" @click="handleClick">
    <hr>
    <mutation-payload/>
  </div>
</template>

<script>
// @ is an alias to /src
// import vuex from '@/store'
import mutationPayload from './mutation-payload'
// import MutationPayload from './mutation-payload.vue'
export default {
  name: 'Home',
  components: {
    mutationPayload

  },
  computed: {
    handleLastData () {
      return this.$store.getters.handleData
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    handleClick () {
      this.$store.commit('incrementData')
    }
  }
}
</script>
