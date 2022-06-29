import {createApp, createRenderer, h} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局引入css
import "./assets/css/base.css";
import "./assets/css/common.css";
import CanvasApp from "./views/CanvasApp";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ElementUI from "./components/ElementUI";

// 注意 h,use,mount,render,createRenderer 是 runtime-core的内容
// createApp 是runtime-dom的内容
createApp(App).component("comp", {render: () => h("h2", "我是自定义组件,在main.js定义")})
    .use(ElementPlus)
    .use(ElementUI)
    .use(store).use(router).directive("highlight", {
    beforeMount(el, binding, vnode) {
        el.style.color = binding.value;
    }
}).mount("#app");

// 阻止启用生产消息  在vue3中删除了
// Vue.config.productionTip = false;

let ctx, canvas;
// 自定义渲染器
const nodeOps = {
    createElement(tag, isSVG, is) {
        // 处理元素的创建逻辑
        return {tag};
    },
    insert(child, parent, author) {
        // 处理元素的插入逻辑
        // 1. 如果子元素,不是dom元素,测试只需要将数据保存到前面虚拟对象上即可
        child.parent = parent;
        if (!parent.child) {
            parent.child = [child];
        } else {
            parent.child.push(child);
        }
        // 2. 如果这里的元素是真实的dom元素.在这里会是canvas
        if (parent.nodeType === 1) {
            // 如果节点是元素节点，则 nodeType 属性将返回 1。
            // 如果节点是属性节点，则 nodeType 属性将返回 2。
            draw(child);

            // 事件处理
            if (child.onClick) {
                canvas.addEventListener("click", () => {
                    child.onClick();
                    setTimeout(() => {
                        draw(child);
                    }, 0);
                });
            }
        }
    },
    remove: child => {
    },
    createText: text => {
    },
    createComment: text => {
    },
    setText: (node, text) => {
    },
    setElementText: (node, text) => {
    },
    parentNode: node => {
    },
    nextSibling: node => {
    },
    querySelector: selector => {
    },
    setScopeId: (el, id) => {
    },
    cloneNode(el) {
    },
    insertStaticContent(content, parent, anchor, isSVG) {
    },
    patchProp(el, key, prevValue, nextValue, isSVG, prevChildren, parentComponent, parentSuspense, unmountChildren) {
        // 属性更新
        el[key] = nextValue;
    }
};

const renderer = createRenderer(nodeOps);

const draw = (el, noClear) => {
    if (!noClear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (el.tag === "div" && el.is === "pieChart") {
        let {data, r, x, y} = el;
        let total = data.reduce((memo, current) => memo + current.count, 0);
        let start = 0, end = 0;
        data.forEach((item) => {
            end += item.count / total * 360;
            drawPieChart(start, end, item.color, x, y, r);
            drawPieChartText(item.name, (start + end) / 2, x, y, r);
            start = end;
        });
    }
    el.childs && el.childs.forEach(child => draw(child, true));
};

const d2a = (n) => {
    return n * Math.PI / 180;
};

// 绘制扇形
const drawPieChart = (start, end, color, cx, cy, r) => {
    let x = cx + Math.cos(d2a(start)) * r;
    let y = cy + Math.sin(d2a(start)) * r;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.arc(cx, cy, r, d2a(start), d2a(end), false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

// 绘制扇形的文字
const drawPieChartText = (val, position, cx, cy, r) => {
    ctx.beginPath();
    let x = cx + Math.cos(d2a(position)) * r / 1.25 - 20;
    let y = cx + Math.sin(d2a(position)) * r / 1.25;
    ctx.fillStyle = "#000";
    ctx.font = "20px 微软雅黑";
    ctx.fillText(val, x, y);
    ctx.closePath();
};

// 扩展mount 首先创建一个画布元素
function createCanvasApp(App) {
    const app = renderer.createApp(CanvasApp);
    const mount = app.mount;
    app.mount = function (selector) {
        // 创建并插入画布
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        // 设置画布属性
        canvas.width = 300;
        canvas.height = 300;
        document.querySelector(selector).appendChild(canvas);

        // 执行默认的mount
        mount(canvas);
    };
    return app;
}

createCanvasApp(CanvasApp).mount("#demo");

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
