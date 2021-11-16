<template>
    <div class="content__posts">
        <main-title title="Posts"></main-title>
        <post-top class="posts_top">
            <input-default :model-value="searchQuery" @update:model-value="setSearchQuery" type="text" placeholder="Search..." class="input-search"/>
            <button-default @click="showModalWindow" class="button-add">Add post</button-default>
            <select-default :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" class="select-sort"/>
        </post-top>
        <modal-window v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </modal-window>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchPosts" @remove="removePost"/>
        <h4 v-else>Loading...</h4>
        <Pager :page="page" :totalPage="totalPages" :limit="limit" @changePage="setPage"/>
    </div>
</template>
<script>
    import PostForm from './../components/PostForm';
    import PostList from './../components/PostList';
    import ButtonDefault from "../components/UI/ButtonDefault";
    import Pager from "../components/Pager";
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    import PostTop from "../components/PostTop";

    export default {
        components: {PostTop, ButtonDefault, PostList, PostForm, Pager},
        data() {
            return {
                dialogVisible: false,
            }
        },

        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery',
                setSelectedSort: 'post/setSelectedSort',
            }),
            ...mapActions({
                fetchPosts: 'post/fetchPosts'
            }),

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
        },

        mounted() {
            this.fetchPosts();
        },

        computed: {
            ...mapState({
                posts: state => state.post.posts,
                isPostsLoading: state => state.post.isPostsLoading,
                selectedSort: state => state.post.selectedSort,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
                sortOptions: state => state.post.sortOptions,
                isPostLoading: state => state.post.isPostLoading,
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',
                sortedAndSearchPosts: 'post/sortedAndSearchPosts'
            })
        },
    }
</script>
<style>

</style>
