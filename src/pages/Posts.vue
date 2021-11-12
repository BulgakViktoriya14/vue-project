<template>
    <div class="content__posts">
        <h1 class="title">Page posts</h1>
        <input-default v-model="searchQuery" type="text" placeholder="Search..."/>
        <button-default @click="showModalWindow">Add post</button-default>
        <select-default v-model="selectedSort" :options="sortOptions"/>
        <modal-window v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </modal-window>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchPosts" @remove="removePost"/>
        <h4 v-else>Loading...</h4>
        <div class="pager">
            <div v-for="pageNumber in totalPage" :key="page" class="pager__item"
                 :class="{'pager__item_current': page === pageNumber }" @click="changePage(pageNumber)">
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>
<script>
    import PostForm from './../components/PostForm';
    import PostList from './../components/PostList';
    import axios from "axios";

    export default {
        components: {PostList, PostForm},
        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPage: 0,
                sortOptions: [
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}
                ]
            }
        },

        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;
            },

            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id);
            },

            showModalWindow() {
                this.dialogVisible = true;
            },

            changePage(pageNumber) {
                this.page = pageNumber;
            },

            async fetchPosts() {
                try {
                    this.isPostLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
                    this.posts = response.data;
                } catch (e) {
                    console.log("error");
                } finally {
                    this.isPostLoading = false;
                }
            }
        },
        mounted() {
            this.fetchPosts();
        },

        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
            },

            sortedAndSearchPosts() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
        },

        watch: {
            page() {
                this.fetchPosts();
            }
        }
    }
</script>
<style>

</style>
