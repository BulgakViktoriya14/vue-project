<template>
    <form class="form" @submit.prevent>
        <input-default v-focus v-model="post.title" type="text" placeholder="Title"/>
        <input-default v-model="post.body" type="text" placeholder="Description"/>
        <button-default @click="createPost">Create post</button-default>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },

        methods: {
            createPost() {
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }

            },
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        justify-content: space-between;
        padding: 40px;
        border: 1px solid #000;
    }
</style>
