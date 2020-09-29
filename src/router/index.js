import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        metaL: {title: '首页'},
        component: () => import("../views/Home.vue")
    },
    {
        path: '/teLePort',
        name: 'teLePort',
        metaL: {title: 'teLePort'},
        component: () => import(/* webpackChunkName: "about" */ '../views/teLePort')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
