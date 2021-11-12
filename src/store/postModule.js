import axios from "axios";

export const postModule = {
    state: () => ({
            posts: [],
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
    }),

    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },

        sortedAndSearchPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },

        setLoading(state, bool) {
            state.isPostLoading = bool
        },

        setPage(state, page) {
            state.page = page
        },

        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },

        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },

    actions: {
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
    }
}
