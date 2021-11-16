<template>
    <input class="input" :value="modelValue" @input="updateInput">
</template>

<script>
    export default {
        name: "input-default",
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        font-size: 16px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #000;
        outline: none;
        margin: 0 0 20px 0;
    }
</style>
