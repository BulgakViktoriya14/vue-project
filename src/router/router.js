import Main from "../pages/Main";
import {createRouter, createWebHashHistory} from "vue-router";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Post from "../pages/Post";
import PostPageWithStore from "../pages/PostPageWithStore";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;
