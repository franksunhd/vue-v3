<template>
    <!--render api 发生变化-->
    <RenderTest v-model:counter="count">
        <template v-slot:default>title...</template>
        <template v-slot:content>content...</template>
    </RenderTest>
</template>

<script>
    import {h, ref} from 'vue';

    export default {
        name: "renderTest",
        components: {
            RenderTest: {
                props: {
                    counter: {
                        type: Number,
                        default: 0
                    }
                },
                render() {
                    return h('div', [
                        h('h1', {
                            onClick: this.onClick
                        }, [
                            `I am RenderTest: ${this.counter}`,
                            this.$slots.default(),
                            this.$slots.content()
                        ]),
                    ])
                },
                methods: {
                    onClick() {
                        this.$emit('update:counter', this.counter + 1);
                    }
                }
            }
        },
        setup() {
            let count = ref(0);

            return {count};
        }
    }
</script>

<style scoped>

</style>
