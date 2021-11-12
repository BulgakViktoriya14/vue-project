<template>
    <div class="posts" v-if="posts.length > 0">
        <h2 class="subtitle">List of users</h2>
        <transition-group name="posts-list">
            <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
        </transition-group>
    </div>
    <h2 class="subtitle" v-else>List of users is empty</h2>
</template>

<script>
    import PostItem from "./PostItem";

    export default {
        components: {PostItem},
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .posts-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .posts-list-enter-active,
    .posts-list-leave-active {
        transition: all 0.4s ease;
    }

    .posts-list-enter-from,
    .posts-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }

    .posts-list-move {
        transition: transform 0.4s ease;
    }
</style>
