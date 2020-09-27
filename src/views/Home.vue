<template>
    <div class="home">
        <h1>Vue3 TEST</h1>
        <p>{{num}}</p>
        <button @click="addRef">click ref ++</button>
        <p>{{count.value}}</p>
        <p>{{plus10}}</p>
        <button @click="addReactive">Click reactive ++</button>
        <p>{{status}}</p>
        <button @click="setStatus">SetStatus</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {getCurrentInstance, ref, reactive, computed, watch} from "vue";

    export default {
        name: "Home",
        setup() {
            //显示当前路径
            const {ctx} = getCurrentInstance();
            console.log(ctx.$router.currentRoute.value.path);

            // 点击按钮 ref ++
            const num = ref(1);
            const addRef = () => {
                num.value++;
            };

            // 点击按钮 reactive ++
            const count = reactive({value: 1});
            const addReactive = () => {
                count.value++;
            };
            watch(count, (newVal, oldVal, clean) => {
                console.log(newVal.value + "," + oldVal.value);
                clean(() => console.log("Clean"));
            });
            // 计算×10
            const plus10 = computed(() => count.value * 10);

            // 获取state.status
            const status = computed(() => ctx.$store.state.status);
            const setStatus = () => {
                console.log(ctx.$store.state);
                ctx.$store.commit("setStatus", status.value);
                console.log(ctx.$store.state.status);
            };
            return {
                num,
                count,
                addRef,
                addReactive,
                plus10,
                status,
                setStatus
            };
        }
    };
</script>
