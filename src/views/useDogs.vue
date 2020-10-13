<template>
    <h1>欢迎光临红浪漫洗浴中心</h1>
    <h2>
        <button @click="clickDogs">点击按钮</button>
        <span>会随机出现一个狗狗</span>
    </h2>
    <div class="title">
        <div v-if="loading">Loading.....</div>
        <img v-if="loaded" :src="result.message"/>
    </div>
</template>

<script>
    import {useGetDogs} from '../components/useUrlDog';
    import {toRefs} from 'vue';

    export default {
        name: "useDogs",
        setup() {
            let {clickDogs, state} = useGetDogs();

            return {clickDogs, ...toRefs(state)};
        }
    }
</script>

<style scoped>
    .title {
        width: 300px;
        min-height: 300px;
        display: inline-block;
    }

    .title > div {
        width: 100%;
        min-height: 300px;
        text-align: center;
        line-height: 300px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .title > img {
        width: 100%;
    }
</style>
