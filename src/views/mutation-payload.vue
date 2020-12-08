<template>
  <div>
    值:{{this.$store.state.count}}
    <button @click="handleClick">点击</button>
    <button @click="handleMulitClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.commit('incrementSingleData', 5)
    },
    handleMulitClick () {
      this.$store.commit('incrementMultiData', { num: 10 })
    }
  }
}
</script>

<style>

</style>
