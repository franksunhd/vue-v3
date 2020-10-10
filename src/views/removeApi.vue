<template>
    <div v-show="isShow">
        <h1>keyCode 作为 v-on 修饰符被移除</h1>
        <h2>v-on:keyup.13 不再被支持</h2>
        <h2>v-on:keyup.enter 只能使用alias方式</h2>

        <hr>

        <h1>$on, $off and $once 移除</h1>
        <h2>上述3个方法被认为不应该由vue提供，因此被移除了，可以使用其他三方库实现。</h2>
        <h2>官方建议使用mitt实现</h2>
    </div>
    <h1 v-show="!isShow">
        从累加器中获取的数据--- {{count}}
    </h1>
</template>

<script>
    import {ref} from 'vue';
    import {emitter} from "../components/emitter";

    export default {
        name: "removeApi",
        props: {
            isShow: {
                type: Boolean,
                default: true
            }
        },
        setup() {
            let count = ref(0);
            emitter.on('sendMsg', msg => {
                count.value = msg;
            });
            return {count}
        }
    }
</script>

<style scoped>

</style>
