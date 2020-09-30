<template>
    <div @click="$emit('update:modelValue', modelValue + 1)">
        <button >点击我</button>
        <span>i am comp, {{modelValue}}</span>
    </div>

</template>

<script>
    export default {
        name: "VModelChild",
        props: {
            modelValue: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>

</style>
