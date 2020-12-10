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
      this.$store.dispatch('handleActionIncrement')
    }
  }
}
</script>

<style>

</style>
