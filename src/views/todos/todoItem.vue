<template>
    <li :class="{completed: todo.completed, editing: todo === editedTodo}">
        <!--绑定完成状态-->
        <div class="view">
            <input type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{todo.title}}</label>
            <button @click="removeTodo(todo)">X</button>
        </div>
        <!--编辑代办-->
        <EditTodo
                class="edit"
                v-todo-focus="todo === editedTodo"
                v-model:todo-title="todo.title"
                @blur="doneEdit(todo)"
                @keyup.enter="doneEdit(todo)"
                @keyup.escape="cancelTodo(todo)"/>
    </li>
</template>

<script>
    import {reactive, toRefs} from 'vue';
    import EditTodo from "./EditTodo";

    export default {
        name: "todoItem",
        props: {
            todo: {
                type: Object,
                required: true
            },
            editedTodo: Object
        },
        emits: ['remove-todo', 'update:edited-todo'],
        components: {EditTodo},
        setup(props, {emit}) {
            const state = reactive({
                beforeEditCache: "", // 缓存编辑前的title
            });

            function removeTodo(todo) {
                emit('remove-todo', todo);
            }

            function editTodo(todo) {
                state.beforeEditCache = todo.title;
                // state.editedTodo = todo;
                emit('update:editedTodo', todo);
            }

            function cancelTodo(todo) {
                todo.title = state.beforeEditCache;
                // state.editedTodo = null;
                emit('update:editedTodo', null);
            }

            function doneEdit(todo) {
                // state.editedTodo = null;
                emit('update:editedTodo', null);
            }

            return {...toRefs(state), editTodo, cancelTodo, doneEdit, removeTodo}
        },
        directives: {
            "todo-focus": (el, {value}) => {
                if (value) {
                    el.focus();
                }
            }
        }
    }
</script>

<style scoped>
    .completed label {
        text-decoration: line-through;
    }

    .edit,
    .editing .view {
        display: none;
    }

    .view,
    .editing .edit {
        display: block;
    }
</style>
