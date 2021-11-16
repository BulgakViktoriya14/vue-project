<template>
    <div class="post">
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__description">{{ post.body}} </p>
        <div class="post__buttons">
            <button-default @click="this.$emit('remove', post)">Delete</button-default>
            <button-default @click="$router.push(`/posts/${post.id}`)">Open</button-default>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .post {
        margin: 30px 0;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        padding: 20px;
    }

    .post__buttons {
        display: flex;
        justify-content: flex-end;
    }

    .post__buttons .button {
        border: 3px solid #e53f00;
        background-color: transparent;
        color: #e53f00;
    }

    .post__buttons .button:first-child {
        margin: 0 20px 0 0;
    }
</style>
