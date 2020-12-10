<template>
  <div>
    vuex
    <button @click="dispatchAction">分发action</button>
  </div>
</template>

<script>
export default {
  methods: {
    dispatchAction () {
      // this.$store.dispatch('handleActionIncrement')
      // this.$store.dispatch('handleActionIncrement', { num: 5 })
      this.$store.dispatch({
        type: 'handleActionIncrement',
        num: '10'
      })
    }
  }
}
</script>

<style>

</style>
