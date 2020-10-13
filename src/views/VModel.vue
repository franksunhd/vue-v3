<template>
    <v-model-child v-model="counter"/>
    <hr>
    <!--等价于-->
    <h1>等价于</h1>
    <v-model-child :modelValue="counter" @update:modelValue="counter = $event"/>
    <hr>
    <h2 class="text">组件支持多个v-model</h2>
</template>

<script>
    import VModelChild from "./VModelChild";
    import {ref} from 'vue';

    export default {
        name: "VModel",
        components: {VModelChild},
        data() {
            return {
                color: 'red'
            }
        },
        setup() {
            let counter = ref(1);
            return {counter};
        }
    }
</script>

<style scoped vars="{color}">
    .text {
        color: var(--color);
    }
</style>
