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
        line-height: 26px;
        color: #4b4b4b;
    }

    .content {
        padding: 40px;
    }

    @media screen and (min-width: 768px) {
        body {
            font-size: 18px;
            line-height: 30px;
        }
    }
</style>
