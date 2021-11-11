<template>
    <form class="form" @submit.prevent>
        <input :value="post.title" @input="post.title = $event.target.value" type="text" placeholder="Title" class="input">
        <input :value="post.description" @input="post.description = $event.target.value" type="text" placeholder="Description" class="input">
        <button @click="createPost" class="button">Create post</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    description: ''
                }
            }
        },

        methods: {
            createPost() {
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    description: ''
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

    .button {
        padding: 15px 30px;
        background-color: #ff4600;
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
        opacity: 0.9;
    }

    .input {
        width: 33%;
        font-size: 16px;
        padding: 10px 10px 0;
        border: none;
        border-bottom: 1px solid #000;
        outline: none;
    }
</style>
