<template>
    <comp/>
    <hr>
    <removeApi :isShow="false"/>
    <hr>
    <div class="home">
        <h1>---ref---</h1>
        <h1>{{count}}</h1>
        <button @click="add">累加器</button>
        <!--
           大圣老师 三天课程
           vue3新增了什么：
           性能；比vue2快了2倍
           tree shaking: 按需编译代码
           composition api: 类似hooks未来
           typescript: 支持ts
           自定义渲染
         -->
    </div>
    <hr>
    <ul>
        <li>
            <h1>---reactive---</h1>
        </li>
        <li><input type="text" v-model="state.val">{{state.val}}</li>
        <li v-for="(item,index) in state.list" :key="index">{{item.name}}</li>
        <li>
            <button @click="addList">添加</button>
        </li>
    </ul>
    <h2>列表的长度：{{total}}</h2>
    <hr>
    <ul>
        <li>
            <h1>---toRefs---</h1>
        </li>
        <li><input type="text" v-model="val">{{val}}</li>
        <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
        <li>
            <button @click="addVal">添加</button>
        </li>
    </ul>
    <hr>
    <h1>
        <div>X: {{x}}</div>
        <div>Y: {{y}}</div>
    </h1>
    <hr>
    <h1>num---{{num}}</h1>
    <h1>doubleNum---{{doubleNum}}</h1>
    <h1 ref="desc"></h1>
    <hr>
    <h2>emits用法</h2>
    <emits @my_click="onClick"/>

    <hr>
    <!--函数式组件-->
    <Functional level="1">
        <div>函数式组件---</div>
        <div>这是一个动态h元素</div>
        <div>
            函数式组件仅能通过简单函数方式创建，functional选项废弃
        </div>
        <ul>
            <li>性能提升在vue3中可忽略不计，所以vue3中推荐使用状态组件</li>
            <li>函数时组件仅能通过纯函数形式声明，接收props和context两个参数</li>
            <li>SFC中 `template` 不能添加functional特性声明函数是组件</li>
            <li>{ functional: true }组件选项移除</li>
        </ul>
    </Functional>
    <hr>
    <!--异步组件-->
    <asyncComponent></asyncComponent>
    <ul>
        <li>
            <h2>异步组件定义时有如下变化：</h2>
        </li>
        <li>
            <h3>必须明确使用defineAsyncComponent包裹</h3>
        </li>
        <li>
            <h3>component 选项重命名为 loader</h3>
        </li>
        <li>
            <h3>Loader 函数不在接收 resolve and reject 且必须返回一个Promise</h3>
        </li>
    </ul>
    <hr>
    <!--自定义指令-->
    <h1 v-highlight="'green'">这是一个指令</h1>
    <hr>
</template>

<script>
    import {defineAsyncComponent} from 'vue';
    // composition api 外引入
    import useAddTodo from "../components/useAddTodo";
    import useMouse from "../components/useMouse";
    // mixin不清晰 而且会有命名重复的问题
    import emits from "./emits";

    import Functional from "./Functional";
    import removeApi from "./removeApi";

    export default {
        name: "Home",
        components: {
            emits,
            Functional,
            removeApi,
            asyncComponent: defineAsyncComponent({
                loader: () => import('./AsyncComponent.vue'),
                delay: 200,
                timeout: 3000,
                // errorComponent: xxx,
                // loadingComponent: xxx
            })
        },
        props: {
            username: {type: String, default: "hello setup"},
        },
        // 好在哪
        setup(props, ctx) {
            console.log('setup');
            console.log(props, ctx);
            // 不要解构 props 对象，那样会使其失去响应性：
            // this在setup中不可用 setup() 中的 this 将与 2.x 选项中的 this 完全不同。
            // console.log(this) // undefined

            // 这个的逻辑很清晰 告别大几百行的逻辑组件
            let {
                count, add, state, addList, list, val, addVal, total, num,
                doubleNum, desc
            } = useAddTodo();
            let {x, y} = useMouse();

            function onClick() {
                console.log('click me!');
            }

            // 一大堆 useXX
            return {
                count,
                state, list, val, total,
                x, y,
                num, doubleNum, desc,
                onClick, add, addList, addVal,
            };

        },
        beforeCreate() {
            console.log('beforeCreate');
        }

        // 相比于mixin好处 数据来源清晰

        /*
        * reactive
        * 响应式转换是“深层的”：会影响对象内部所有嵌套的属性。
        * 基于 ES2015 的 Proxy 实现，返回的代理对象不等于原始对象。
        * 建议仅使用代理对象而避免依赖原始对象。
        */


        /*
         * export const enum PatchFlags {
         *      TEXT = 1, // 动态文本节点
         *      CLASS = 1 << 1, // 2 动态 class
         *      STYLE = 1 << 2, // 4 动态 style
         *      PROPS = 1 << 3, // 8 动态属性，但不包含类名和样式 如果是组件，则可以包含类名和样式
         *      FULL_PROPS = 1 << 4, // 16 具有动态 key 属性，当 key 改变时，需要进行完整的 diff 比较。
         *      HYDRATE_EVENTS = 1 << 5, // 32 带有监听事件的节点
         *      STABLE_FRAGMENT = 1 << 6, // 64 一个不会改变子节点顺序的 fragment
         *      KEYED_FRAGMENT = 1 << 7, // 128 带有 key 属性的 fragment 或部分子字节有 key
         *      UNKEYED_FRAGMENT = 1 << 8, // 256 子节点没有 key 的 fragment
         *      NEED_PATCH = 1 << 9, // 512 一个节点只会进行非 props 比较
         *      DYNAMIC_SLOTS = 1 << 10, // 1024 动态 slot
         *      HOISTED = -1, // 静态节点
         *      BAIL = -2 // 指示在 diff 过程应该要退出优化模式
         * }
         */
    };
</script>
