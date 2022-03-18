<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" v-model="username" data-testid="username">
      <input type="submit">
  </form>
  <div data-testid="success" v-if="submitted">
      Thanks for your submission {{ username }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            submitted: false
        }
    },
    methods: {
        handleSubmit() {
            this.submitted = true
        }
    }
}
</script>

<style>

</style>