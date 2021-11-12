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
        width: 33%;
        font-size: 16px;
        padding: 10px 10px 0;
        border: none;
        border-bottom: 1px solid #000;
        outline: none;
    }
</style>
