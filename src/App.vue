<template>
    <div>
        <post-form @create="createPost"/>
        <post-list v-bind:posts="posts"/>
        <div>
            <button @click="addLike">Like</button>
            <button @click="addDislike">Dislike</button>
        </div>
        <div>
            <div>Количество лайков: {{ likes }}</div>
            <div>Количество лайков: {{ dislikes }}</div>
        </div>
    </div>
</template>
<script>
    import PostForm from './components/PostForm';
    import PostList from './components/PostList';

    export default {
        components: {PostList, PostForm},
        data() {
            return {
                likes: 0,
                dislikes: 0,
                posts: [
                    {id: 1, title: 'Post № 1', description: 'text post'},
                    {id: 1, title: 'Post № 2', description: 'text post'},
                    {id: 1, title: 'Post № 3', description: 'text post'}
                ],
            }
        },

        methods: {
            addLike() {
                this.likes += 1;
            },

            addDislike() {
                this.dislikes += 1;
            },

            createPost(post) {
                this.posts.push(post)
            }
        }
    }
</script>
<style>
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, sans-serif;
        font-size: 16px;
    }

    #app {
        margin: 20px;
    }
</style>
