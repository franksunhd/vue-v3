import {createRouter, createWebHistory} from 'vue-router'
import store from './../store/index';

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
        component: () => import('../views/teLePort')
    },
    {
        path: '/fragments',
        name: 'fragments',
        meta: {title: 'fragments'},
        component: () => import('../views/fragments')
    },
    {
        path: '/customRenderer',
        name: 'CanvasApp',
        meta: {title: '自定义渲染器'},
        component: () => import('../views/CanvasApp')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    store.commit("setCurrentPath", to.path);
    next();
});

export default router;
