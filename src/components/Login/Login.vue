<template>
    <div>
        <form>
            <input type="text">
            <button @click="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            submit() {
                this.$emit('submit')
            }
        }
    }
</script>

<style scoped>

</style>