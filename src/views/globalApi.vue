<template>
    <!--全局API-->
    <table class="tableBox" width="800">
        <template v-for="item in list">
            <thead v-if="item.flag === 1">
            <tr v-for="(val,index) in item.child" :key="index">
                <th>{{val.left}}</th>
                <th>{{val.right}}</th>
            </tr>
            </thead>
            <tbody v-else>
            <tr v-for="(val,index) in item.child" :key="index">
                <td>{{val.left}}</td>
                <td>{{val.right}}</td>
            </tr>
            </tbody>
        </template>
    </table>
    <!--Global and internal APIs重构为可做摇树优化-->
    <h1>Global and internal APIs重构为可做摇树优化</h1>
    <h2>在vue2中这样使用</h2>
    <pre style="font-size: 16px;">
        import Vue from 'vue'

        Vue.nextTick(() => {
            // something something DOM-related
        })
    </pre>
    <h2>在vue3中这样使用</h2>
    <pre style="font-size: 16px;">
        import { nextTick } from 'vue'
        nextTick(() => {
            // something something DOM-related
        })
    </pre>
</template>

<script>
    import {nextTick} from "vue";

    export default {
        name: "globalApi",
        setup() {

            let list = [
                {
                    flag: 1, child: [
                        {left: "2.x Global API", right: "3.x Instance API (app)"}
                    ]
                },
                {
                    flag: 2, child: [
                        {left: "Vue.config", right: "app.config"},
                        {left: "Vue.config.productionTip", right: "removed (see below)"},
                        {left: "Vue.config.ignoredElements", right: " app.config.isCustomElement (see below)"},
                        {left: "Vue.component", right: "app.component"},
                        {left: "Vue.directive", right: "app.directive"},
                        {left: "Vue.mixin", right: "app.mixin"},
                        {left: "Vue.use", right: "app.use (see below)"},
                        {left: "Vue.filter", right: "removed"}
                    ]
                }
            ];

            nextTick(() => {
                console.log("nextTick is here!!!");
            });

            return {list};
        }
    };
</script>

<style scoped lang="less">
    .tableBox {
        text-align: left;
        font-size: 16px;

        th, td {
            height: 50px;
            line-height: 50px;
        }

        th {
            background-color: #f7f7f7;
        }

        tr:nth-child(even) td {
            background-color: #f7f7f7;
        }
    }
</style>
