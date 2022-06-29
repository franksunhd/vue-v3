<template>
    <input type="text"
           :value="todoTitle"
           @input="inputChange"
           v-bind="$attrs"/>
</template>

<script>
    export default {
        name: "EditTodo",
        props: {
            todoTitle: {
                type: String,
                default: ""
            }
        },
        setup(props, {emit}) {
            function inputChange(e) {
                emit("update:todo-title", e.target.value);
            }

            return {inputChange};
        }
    };
</script>

<style scoped>

</style>
