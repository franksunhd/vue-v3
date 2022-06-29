<template>
    <h1>{{ count }},{{ object.foo }}</h1>
    <h2 @click="a">hello world</h2>
</template>

<script>
    import {ref, reactive} from "vue";

    export default {
        name: "setup",
        props: {
            nameValue: {
                type: Boolean,
                default: true
            }
        },
        setup(props, {attrs, emit, slots}) {
            // setup： Composition Api 的入口
            // 在 beforeCreate 钩子之前被调用
            // 该函数接收 props 作为其第一个参数
            //      props 对象是响应式的，watchEffect 或 watch 会观察和响应 props 的更新
            //      然而不要解构 props 对象，那样会使其失去响应性：
            //      不能修改props对象中的值，否则会报警告
            // 第二个参数可以解构
            //      attrs 和 slots 都是内部组件实例上对应项的代理，可以确保在更新后仍然是最新值。
            //      所以可以解构，无需担心后面访问到过期的值
            console.log(props.nameValue);

            const count = ref(0);
            const object = reactive({foo: "bar"});

            // this 在 setup() 中不可用
            function a() {
                console.log("这是函数中的this---", this);
            }

            // 暴露给模板
            // setup 返回的 ref 在模板中会自动解开，不需要写 .value
            return {
                count, object, a
            };

            // 或者 渲染函数 / JSX 中使用
            // return () => h('h1', [
            //     count.value,
            //     ',',
            //     object.foo
            // ])
        }
    };
</script>

<style scoped>

</style>
