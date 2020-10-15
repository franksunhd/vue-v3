<template>
    <h1>reactive</h1>
    <h2>接收一个普通对象然后返回该普通对象的响应式代理 |  const obj = reactive({ count: 0 })</h2>
    <h2>响应式转换是“深层的”：会影响对象内部所有嵌套的属性。</h2>
    <h2>返回的代理对象不等于原始对象。建议仅使用代理对象而避免依赖原始对象。</h2>
</template>

<script>
    import {reactive} from "vue";

    export default {
        name: "reactiveApi",
        setup() {
            const state = reactive({
                count: 0
            });
            return {state};
        }
    };
</script>

<style scoped>

</style>
