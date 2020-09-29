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
*
*
*   vite 原理有啥用
*   1. vue3配套的工具 下一代的脚手架工具
*   2. 写一个vite,完整的掌握了vue3代码的编译流程(使用层面)
*
*   标记的静态节点vue2中不是也有吗?
*   答: vue2也有静态标记,但是只能标记全量的静态
*       例如 v-if 内部的静态节点都会当作动态的节点进行标记
*       <p id="xx" style="color:red;">{{name}}</p>
*       这个节点,只有child是动态的,vue2也会全量的diff
*       但是vue3只会diff children
*   eg:
*       <div>
           <p>hello world</p>
           <p>{{message}}</p>
           <p>hello world</p>
*       </div>
*       在vue2中会把所有的标签全部diff一遍
*       在vue3中只会diff一个message的动态标签 也就是只有一个动态节点
*
*   vue3的路由是由权重的,是有权限的(类似于css选择器的权重),而vue2没有权重
*
*   v-dom diff目的是算出最小的修改
*
*
*   composition api 为vue应用提供了更好的逻辑服用和代码组织
*/
