import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        alias: "/users",
        component: () => import("@/views/Users.vue"),
    },
    {
        path: '/users/:userId/todos',
        name: "Todos",
        component: () => import("@/views/Todos.vue"),

    },
    {
        path: '/users/:userId/posts',
        name: "Posts",
        component: () => import("@/views/Posts.vue"),
    },
    {
        path: '/users/:userId/albums',
        name: "Albums",
        component: () => import("@/views/Albums.vue"),
    },
    {
        path:'/albums/:albumId/photos',
        name:'Photos',
        component: () => import("@/views/Photos.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;
