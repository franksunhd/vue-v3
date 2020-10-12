import {reactive, computed} from 'vue';

const filters = {
    all(toDos) {
        return toDos;
    },
    active(toDos) {
        return toDos.filter(todo => !todo.completed)
    },
    completed(toDos) {
        return toDos.filter(todo => todo.completed)
    }
};

export function useFilter(toDos) {
    const filterState = reactive({
        visibility: 'all',
        filterItems: [
            {label: "All", value: 'all'},
            {label: "Active", value: 'active'},
            {label: "Completed", value: 'completed'},
        ],
        filterToDos: computed(() => {
            return filters[filterState.visibility](toDos.value)
        })
    });
    return filterState;
}
