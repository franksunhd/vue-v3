<template>
    <el-button @click="clickShow('button')">按钮</el-button>
    <el-button @click="clickShow('layout')">布局</el-button>
    <div class="pad">
        <!--按钮-->
        <ElButtonBox v-if="show === 'button'"/>
        <!--布局-->
        <ElLayoutBox v-if="show=== 'layout'"/>
    </div>
</template>

<script>
    import {ref} from "vue";
    import ElButtonBox from "./components/ElButtonBox";
    import ElLayoutBox from "./components/ElLayoutBox";

    export default {
        name: "ElementUI",
        components: {ElButtonBox, ElLayoutBox},
        setup() {
            let show = ref("button");

            function clickShow(val) {
                show.value = val;
            }

            return {show, clickShow};
        }
    };
</script>

<style scoped lang="less">
    .pad {
        width: 100%;
        padding-top: 20px;
        box-sizing: border-box;
    }
</style>