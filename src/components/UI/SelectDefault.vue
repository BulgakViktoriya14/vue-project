<template>
    <select v-model="modelValue" @change="changeOption" class="select">
        <option disabled value="">Choose...</option>
        <option v-for="option in options" :key="option.value" :value="option.value"> {{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: "select-default",
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
    .select {
        padding: 10px;
        font-size: 16px;
        margin: 0 0 20px 0;
    }
</style>
