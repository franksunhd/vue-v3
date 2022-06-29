<template>
    <el-divider content-position="left">默认按钮</el-divider>
    <el-row class="mb-4">
        <el-button @click="clickBtn('Default')">Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
    </el-row>

    <el-divider content-position="left">朴素按钮</el-divider>
    <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-divider content-position="left">圆角按钮</el-divider>
    <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-divider content-position="left">圆形按钮</el-divider>
    <el-row>
        <el-button :icon="Search" circle/>
        <el-button type="primary" :icon="Edit" circle/>
        <el-button type="success" :icon="Check" circle/>
        <el-button type="info" :icon="Message" circle/>
        <el-button type="warning" :icon="Star" circle/>
        <el-button type="danger" :icon="Delete" circle/>
    </el-row>

    <el-divider content-position="left">禁用按钮</el-divider>
    <el-row class="mb-4">
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
    </el-row>

    <el-divider content-position="left">文字按钮</el-divider>
    <el-row class="mb-4">
        <el-button text bg>Default</el-button>
        <el-button type="primary" text bg>Primary</el-button>
        <el-button type="success" text bg>Success</el-button>
        <el-button type="info" text bg>Info</el-button>
        <el-button type="warning" text bg>Warning</el-button>
        <el-button type="danger" text bg>Danger</el-button>
    </el-row>

    <el-divider content-position="left">自定义颜色</el-divider>
    <el-row class="mb-4">
        <el-button color="#626aef">Default</el-button>
        <el-button type="primary" color="#626aef" plain>Primary</el-button>
        <el-button type="success" color="#626aef" bg>Success</el-button>
        <el-button type="info" color="#626aef" bg disabled>Info</el-button>
        <el-button type="warning" color="#626aef" plain text loading>Warning</el-button>
        <el-button type="danger" color="#626aef" :icon="Search">Danger</el-button>
    </el-row>
</template>

<script>
    import {Check, Delete, Edit, Message, Search, Star} from "@element-plus/icons-vue";
    import {getCurrentInstance} from "vue";

    export default {
        name: "ElButtonBox",
        setup() {
            let {proxy} = getCurrentInstance();

            function clickBtn(val) {
                proxy.$message({type: "warning", message: val});
            }

            return {Check, Delete, Edit, Message, Search, Star, clickBtn};
        }
    };
</script>

<style scoped>

</style>