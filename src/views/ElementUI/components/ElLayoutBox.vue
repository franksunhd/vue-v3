<template>
    <el-divider content-position="left">正常布局</el-divider>
    <el-row>
        <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark"></div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light"></div>
        </el-col>
    </el-row>


    <el-divider content-position="left">列偏移</el-divider>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content ep-bg-purple"></div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ElLayoutBox",
        setup() {
            return {};
        }
    };
</script>

<style scoped lang="less">
    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .ep-bg-purple-dark {
        background-color: #99a9bf;
    }

    .ep-bg-purple {
        background-color: #d3dce6;
    }

    .ep-bg-purple-light {
        background-color: #e5e9f2;
    }
</style>