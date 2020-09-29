<template>
    <div class="teLePort">
        <h1>传送门组件提供一种简洁的方式可以指定它里面内容的父元素</h1>
        <button @click="modelOpen = true">开启弹窗</button>

        <teleport to="body">
            <div v-if="modelOpen" class="modelBox">
                <div>
                    这里是传送门的内容span
                    <button @click="modelOpen = false">关闭传送门</button>
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
