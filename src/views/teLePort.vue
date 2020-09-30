<template>
    <div class="teLePort">
        <h1>1. 传送门组件提供一种简洁的方式可以指定它里面内容的父元素</h1>
        <h1>
            2. 用起来也比较简单，就是可以渲染vue的组件内容，到指定的dom节点，做弹窗比较有用,
        </h1>
        <h1>
            因为弹窗需要渲染到最外层body下面，否则嵌套过多，蒙层可能会被父元素的transform影响
        </h1>
        <button style="margin-top: 20px;font-size: 16px;" @click="modelOpen = true">开启弹窗</button>

        <teleport to="body">
            <div v-if="modelOpen" class="modelBox">
                <div style="font-size: 20px;">
                    这里是传送门的内容span
                    <button style="margin-top: 20px;" @click="modelOpen = false">关闭传送门</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "teLePort",
        setup() {
            let modelOpen = ref(false);
            return {modelOpen};
        }
    }
</script>

<style scoped lang="less">
    .modelBox {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            width: 300px;
            height: 300px;
            padding: 5px;
        }
    }
</style>
