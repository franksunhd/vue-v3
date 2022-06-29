import {createStore} from "vuex";

export default createStore({
    state: {
        currentPath: ""
    },
    mutations: {
        setCurrentPath(state, path) {
            state.currentPath = path;
        }
    }
});
