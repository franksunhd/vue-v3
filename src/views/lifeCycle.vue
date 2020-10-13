<template>
    <div style="text-align: center;font-size: 20px;">
        <h1>欢迎来到王者荣耀</h1>
        <div>请选择匹配的英雄</div>
        <div>
            <button @click="selectedFun(index)" v-for="(item,index) in girls" :key="index">{{item}}</button>
        </div>
        <div>
            您选择的英雄是【{{selectedName}}】
        </div>
    </div>
</template>

<script>
    import {
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onRenderTracked,
        onRenderTriggered,
        reactive,
        toRefs
    } from 'vue';

    export default {
        name: "lifeCycle",
        setup() {
            const data = reactive({
                girls: ['亚瑟', '貂蝉', '牛魔王', '红孩儿'],
                selectedName: '',
                selectedFun: (index) => {
                    data.selectedName = data.girls[index];
                }
            });

            onUpdated(() => {
                console.log('5.组件更新之后执行-----onUpdated()');
            });

            onBeforeUpdate(() => {
                console.log('4.组件更新之前执行-----onBeforeUpdate()');
            });

            onMounted(() => {
                console.log('3.组件挂载在页面之后执行-----onMounted()');
            });

            onBeforeMount(() => {
                console.log('2.组件挂载在页面之前执行-----onBeforeMount()');
            });

            console.log('1.开始创建组件-----setup()');

            // 状态跟踪  用return返回去的值，都会跟踪
            onRenderTracked((event) => {
                console.log("状态跟踪组件----------->", event);
            });

            // 状态触发组件
            onRenderTriggered((event) => {
                console.log("状态触发组件--------------->", event);
                /*
                    - key 那边变量发生了变化
                    - newValue 更新后变量的值
                    - oldValue 更新前变量的值
                    - target 目前页面中的响应变量和函数
                */
            });

            return {...toRefs(data)}
        },
        beforeCreate() {
            console.log('1.1 组件创建之前-----beforeCreate()');
        },
        created() {
            console.log('1.2 组件创建之后-----created()');
        },
        beforeMount() {
            console.log('2.1 组件挂载在页面之前执行-----beforeMount()');
        },
        mounted() {
            console.log('3.1 组件挂载在页面之后执行-----mounted()');
        },
        beforeUpdate() {
            console.log('4.1 组件更新之前执行-----beforeUpdate()');
        },
        updated() {
            console.log('5.1 组件更新之后执行-----updated()');
        },
    }
</script>

<style scoped>

</style>
