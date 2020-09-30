<template>
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
</template>

<script>
    // composition api 外引入
    import useAddTodo from "../components/useAddTodo";
    import useMouse from "../components/useMouse";
    // mixin不清晰 而且会有命名重复的问题
    import emits from "./emits";

    export default {
        name: "Home",
        components: {emits},
        // 好在哪
        setup() {
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

        // 相比于mixin好处 数据来源清晰

        // 如何组合
    };
</script>
