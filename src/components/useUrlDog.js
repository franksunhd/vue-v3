import {ref, reactive, toRefs} from 'vue'
import axios from 'axios'

function getUrl(url) {
    let result = ref(null);
    let loading = ref(true);
    let loaded = ref(false);
    let error = ref(null);

    axios.get(url).then((res) => {
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch(e => {
        error.value = e;
        loading.value = false;
    });
    return {result, loading, loaded, error}
}

function getDogs() {
    return getUrl("https://dog.ceo/api/breeds/image/random");
}

export function useGetDogs() {
    let {result, loading, loaded} = getDogs();
    const state = reactive({
        result: result,
        loading: loading,
        loaded: loaded
    });

    function clickDogs() {
        let obj = getDogs();
        state.result = obj.result;
        state.loaded = obj.loaded;
        state.loading = obj.loading;
    }

    return {clickDogs, state};
}
