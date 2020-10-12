<template>
    <div>
        <!--新增todo-->
        <EditTodo v-model:todo-title="newTodo"
                  @keyup.enter="addTodo" autofocus placeholder="新增今日待办" autocomplete="off"/>
        <ul>
            <todoItem v-for="todo in filterToDos" :key="todo.id" :todo="todo"
                      v-model:edited-todo="editedTodo"
                      @remove-todo="removeTodo"/>
        </ul>
        <!--过滤-->
        <filterItem :items="filterItems" v-model:filter-val="visibility"/>
    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue';
    import EditTodo from "./EditTodo";
    import todoItem from "./todoItem";
    import filterItem from "./filterItems";
    import {useToDos} from "./useTodos";
    import {useFilter} from "./useFilter";

    export default {
        name: "toDos",
        components: {EditTodo, todoItem, filterItem},
        setup() {
            const todoState = reactive({
                newTodo: '',
                editedTodo: null, // 正在编辑的todo
            });
            const {toDos, addTodo, removeTodo} = useToDos(todoState);
            const filterState = useFilter(toDos);

            return {
                ...toRefs(todoState),
                ...toRefs(filterState),
                addTodo,
                removeTodo,
            }
        }
    }
</script>

<style scoped>

</style>
