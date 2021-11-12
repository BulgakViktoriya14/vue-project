<template>
    <div class="content">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        components: {Navbar}
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, sans-serif;
        font-size: 16px;
    }

    .content {
        padding: 40px;
    }
</style>
