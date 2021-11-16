<template>
    <div class="content__posts">
        <main-title title="Posts"></main-title>
        <post-top>
            <input-default v-model="searchQuery" type="text" placeholder="Search..." class="input-search"/>
            <button-default @click="showModalWindow" class="button-add">Add post</button-default>
            <select-default v-model="selectedSort" :options="sortOptions" class="select-sort"/>
        </post-top>
        <modal-window v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </modal-window>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchPosts" @remove="removePost"/>
        <h4 v-else>Loading...</h4>
        <Pager :page="page" :totalPage="totalPage" :limit="limit" @changePage="changePage"/>
    </div>
</template>
<script>
    import PostForm from './../components/PostForm';
    import PostList from './../components/PostList';
    import axios from "axios";
    import Pager from "../components/Pager";
    import PostTop from "../components/PostTop";

    export default {
        components: {PostTop, Pager, PostList, PostForm},
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
    .input-search,
    .button-add,
    .select-sort {
        width: 100%;
    }

    .button-add {
        margin: 0 0 20px 0;
    }

    .input-search {
        width: calc(100% - 20px);
    }

    @media screen and (min-width: 1020px) {
        .input-search {
            width: 50%;
        }

        .button-add {
            width: 20%;
        }

        .select-sort {
            width: 20%;
        }
    }
</style>
