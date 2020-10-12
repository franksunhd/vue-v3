import {ref, watchEffect} from 'vue';
// 缓存操作
const todoStorage = {
    fetch() {
        let toDos = JSON.parse(localStorage.getItem('vue3-toDos') || '[]');
        toDos.forEach((todo, index) => {
            todo.id = index + 1;
        });
        return toDos;
    },
    save(toDos) {
        localStorage.setItem('vue3-toDos', JSON.stringify(toDos));
    }
};

export function useToDos(state) {
    const toDos = ref(todoStorage.fetch());

    function addTodo() {
        if (state.newTodo.trim() !== "") {
            toDos.value.push({
                id: toDos.value.length + 1,
                title: state.newTodo,
                completed: false
            });
        }
        state.newTodo = '';
    }

    function removeTodo(todo) {
        toDos.value.splice(toDos.value.indexOf(todo), 1);
    }

    watchEffect(() => {
        todoStorage.save(toDos.value);
    });

    return {toDos, removeTodo, addTodo}
}
