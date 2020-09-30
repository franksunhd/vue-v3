import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {title: '首页'},
        component: () => import("../views/Home.vue")
    },
    {
        path: '/teLePort',
        name: 'teLePort',
        meta: {title: '传送门'},
        component: () => import(/* webpackChunkName: "about" */ '../views/teLePort')
    },
    {
        path: '/fragments',
        name: 'fragments',
        meta: {title: 'fragments'},
        component: () => import(/* webpackChunkName: "about" */ '../views/fragments')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
