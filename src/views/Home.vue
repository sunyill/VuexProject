<template>
  <div class="home">
    this is my first VuexPage
    <hr>
    {{$store.state.msg}}
    <hr>
    --{{$store.getters.handleData}}
    <hr>
    最后处理数据-{{handleLastData}}
  </div>
</template>

<script>
// @ is an alias to /src
// import vuex from '@/store'
export default {
  name: 'Home',
  components: {

  },
  computed: {
    handleLastData () {
      return this.$store.getters.handleData
    }
  },
  created () {
    console.log(this)
  }
}
</script>
