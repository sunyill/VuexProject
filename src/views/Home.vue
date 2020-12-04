<template>
  <div class="home">
    this is my first VuexPage
    {{$store.state.msg}}
  </div>
</template>

<script>
// @ is an alias to /src
// import vuex from '@/store'
export default {
  name: 'Home',
  components: {

  }
}
</script>
