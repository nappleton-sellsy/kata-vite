<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const header = ref('Hello');

const getTitle = computed(() => (
    header.value + ' bitch ' + store.state.count
))

</script>
<template>
  <h1>{{ getTitle }}</h1>
</template>