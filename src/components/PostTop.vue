<template>
    <div class="posts_top">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PostTop"
    }
</script>

<style scoped>
    .posts_top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (min-width: 1020px) {
        .posts_top {
            flex-direction: row;
        }
    }
</style>
