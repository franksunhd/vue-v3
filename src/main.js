import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局引入css
import "./assets/css/base.css";
import "./assets/css/common.css";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');

/*
* 为啥这么玩？
*
*
* 响应式 + 虚拟dom + 模板编译 + 组件化
*
* 编译时优化 vue3最大的特点
*
* vite 按需加载 现代浏览器都支持import了
*
* import xx from './a.js' 浏览器会发出一个网络请求
*
* vite 拦截这个请求 去做vue相关的编译 解析等 实现了按需加载的能力
*
* vite 不用打包
*
* dev 秒开 build 走的是rollup
*
* @todo
*   1. 支持npm包的import
*       // import xx from 'vue' 替换为 import xx from '/@modules/vue'
*   2. 支持.vue单文件组件的解析
*      // .vue文件浏览器是不认识的 浏览器import的时候只能认识js
*      // .vue单文件组件拆成script template
*      // template => render函数 拼成一个对象
*   3. 支持 import css
*   4. 比如热更新等 ts支持等
*/
