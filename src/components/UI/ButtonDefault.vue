<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "button-default",
    }
</script>

<style scoped>
    .button {
        padding: 15px 30px;
        background-color: #e53f00;
        color: #fff;
        font-weight: bold;
        font-family: Arial, sans-serif;
        border: none;
        outline: none;
        font-size: 18px;
        cursor: pointer;
        opacity: 1;
        transition: 150ms;
    }

    .button:hover {
        opacity: 0.8;
    }
</style>
