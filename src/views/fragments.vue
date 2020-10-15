<template>
    <h1>Fragments:</h1>
    <h2>vue3中组件允许拥有多个根</h2>
    <div v-html="code" style="font-size: 20px;"></div>

    <h1 style="margin-top: 20px;">
        这在vue2中会报错，看起来好像没啥用，不就是少了个div吗，不过在我看来还是挺有意义的
    </h1>
    <h2>1. 少了很多没意义的div</h2>
    <h2>2. 组件递归，可以实现平级递归，不会有多余的div了 这个在以后实现虚拟列表，tree组件的时候意义重大</h2>
</template>

<script>
    export default {
        name: "fragments",
        setup() {
            let code = `<span><</span>template><br>&nbsp;&nbsp;
                <span><</span>header>header<span><</span>/header><br>&nbsp;&nbsp;
                <span><</span>main v-bind="$attrs">main<span><</span>/main><br>&nbsp;&nbsp;
                <span><</span>footer>footer<span><</span>/footer><br>
            <span><</span>/template>`;

            return {code};
        }
    };
</script>

<style scoped>

</style>
