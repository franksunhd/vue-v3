<template>
    <div style="text-align: center;font-size: 20px;">
        <h1>欢迎来到《和平精英》</h1>
        <div>请选择匹配的英雄</div>
        <div>
            <button @click="overAction">点餐完毕</button>
        </div>
        <div>overText---{{ overText }}</div>
        <div>selectName---{{ selectName }}</div>

        <hr>
        <div>{{ nowTime }}</div>
        <div>
            <button @click="getNowTime">显示时间</button>
        </div>
    </div>
</template>

<script>
    import {ref, watch, reactive, toRefs, onMounted} from 'vue';

    export default {
        name: "watchTest",
        setup() {
            const overText = ref("红浪漫");
            const girls = reactive({
                selectName: ''
            });

            const overAction = () => {
                girls.selectName = overText.value;
                overText.value = overText.value + " | 点餐完成";
            };

            watch([overText, () => girls.selectName], (newVal, oldVal) => {
                console.log(`new--->${newVal[0]}`);
                console.log(`old--->${oldVal[0]}`);
                document.title = newVal[0];
                girls.selectName = newVal[0];
            });

            const nowTime = ref("00:00:00");
            let timer = null;
            onMounted(() => {
                timer = setTimeout(getNowTime, 10); // 立即执行一次
            });

            const getNowTime = () => {
                const now = new Date();
                const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
                const min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
                const sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
                nowTime.value = hour + ":" + min + ":" + sec;
                clearTimeout(timer); // 清除上一次的定时器
                timer = setTimeout(getNowTime, 1000);   //每一秒执行一次这个方法
                console.log(timer)
            };

            return {
                nowTime,
                getNowTime,
                overText,
                overAction,
                ...toRefs(girls)
            };
        }
    }
</script>

<style scoped>

</style>
