<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script>
    export default {
        name: "main-title",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .title {
       margin: 40px 0;
        text-align: center;
    }
</style>
