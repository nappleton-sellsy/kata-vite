<template>
    <p data-testid="welcome" v-if="!showSuccess">Coucou</p>
    <p data-testid="success" v-else>Congrats</p>
    <button @click="bigSuccess">Click me</button>

</template>

<script>
export default {
    data() {
        return {
            showSuccess: false
        }
    },
    methods: {
        bigSuccess() {
            this.showSuccess = true
        }
    }
}
</script>