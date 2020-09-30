<template>
    <div @click="$emit('my_click')">
        <button style="font-size: 16px;">自定义事件 打印click me</button>
    </div>
    <h2>vue3中组件发送的自定义事件需要定义在emits选项中</h2>
    <h3>1. 原生事件会触发两次,比如click</h3>
    <h3>2. 更好的指示组件工作方式</h3>
    <h3>3. 对象形式事件校验</h3>
</template>

<script>
    export default {
        name: "emits",
        emits: ['my_click'],
        setup() {

            function my_click() {
                console.log('hello');
            }

            return {my_click}
        }
    }
</script>

<style scoped>

</style>
