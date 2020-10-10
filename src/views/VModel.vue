<template>
    <v-model-child v-model="counter"/>
    <hr>
    <!--等价于-->
    <h1>等价于</h1>
    <v-model-child :modelValue="counter" @update:modelValue="counter = $event"/>
</template>

<script>
    import VModelChild from "./VModelChild";
    import {ref} from 'vue';

    export default {
        name: "VModel",
        components: {VModelChild},
        setup() {
            let counter = ref(1);
            return {counter};
        }
    }
</script>

<style scoped>

</style>
