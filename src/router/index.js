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
    {
        path: '/globalApi',
        name: 'globalApi',
        meta: {title: '全局API'},
        component: () => import('../views/globalApi')
    },
    {
        path: '/VModel',
        name: 'VModel',
        meta: {title: 'v-model'},
        component: () => import('../views/VModel')
    },
    {
        path: '/renderTest',
        name: 'renderTest',
        meta: {title: '渲染函数API变化'},
        component: () => import('../views/renderTest')
    },
    {
        path: '/transitionTest',
        name: 'transitionTest',
        meta: {title: '动画'},
        component: () => import('../views/transitionTest')
    },
    {
        path: '/removeApi',
        name: 'removeApi',
        meta: {title: '移除的API'},
        component: () => import('../views/removeApi')
    },
    {
        path: '/toDos',
        name: 'toDos',
        meta: {title: 'vue3核心特性小练习'},
        component: () => import('../views/toDos/toDos')
    },
    {
        path: '/lifeCycle',
        name: 'lifeCycle',
        meta: {title: '生命周期'},
        component: () => import('../views/lifeCycle')
    },
    {
        path: '/watchTest',
        name: 'watchTest',
        meta: {title: 'watch监听'},
        component: () => import('../views/watchTest')
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
