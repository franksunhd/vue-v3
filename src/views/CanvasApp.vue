<template>
    <div is="pieChart" @click="handleClick" :data="state.data" :x="150" :y="150" :r="100"/>
</template>

<script>
    import {reactive} from "vue";

    export default {
        name: "CanvasApp",
        setup() {
            const state = reactive({
                data: [
                    {name: "大专", count: 200, color: "brown"},
                    {name: "本科", count: 300, color: "yellow"},
                    {name: "硕士", count: 100, color: "pink"},
                    {name: "博士", count: 50, color: "skyblue"}
                ]
            });

            function handleClick() {
                state.data.push({name: "其他", count: 30, color: "orange"});
            }

            return {state, handleClick};
        }
    };
</script>

<style scoped>

</style>
