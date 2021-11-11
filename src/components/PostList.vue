<template>
    <div class="post" v-for="post in posts">
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__description">{{ post.description}} </p>
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post {
        margin: 30px 0;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        padding: 20px;
    }
</style>
