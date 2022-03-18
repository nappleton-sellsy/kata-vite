<script setup>
defineProps({
  msg: String
})
</script>
<script>
export default {
  computed: {
    getCount() {
      return this.$store.state.count
    }
  },
  methods: {
    addToCount() {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="addToCount">Increment</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <p data-testid="counter">Count is {{ getCount }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
