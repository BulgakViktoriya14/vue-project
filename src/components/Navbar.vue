<template>
    <div class="navbar">
        <button-default @click="$router.push('/')">Home</button-default>
        <button-default @click="$router.push('/about')">About</button-default>
        <button-default @click="$router.push('/posts')">Posts</button-default>
        <button-default @click="$router.push('/store')">Store</button-default>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        background-color: #e53f00;
        padding: 0 20px;
    }
</style>
