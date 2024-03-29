import {ref, reactive, unref, toRef, toRefs, computed, watch, onMounted, onUnmounted} from "vue";
import {emitter} from "./emitter";

function useAddTodo() {
    // ref 简单的数据结构变成响应式
    let count = ref(0);

    function add() {
        count.value++;

        emitter.emit("sendMsg", count.value);
    }

    // reactive 复杂的数据结构变成响应式
    let state = reactive({
        list: [
            {name: "吃烧烤", value: false},
            {name: "打游戏", value: false}
        ],
        val: ""
    });

    // unref 解构复杂的数据结构变为响应式
    let stateUnref = reactive({
        list: [
            {name: "看电影", value: false},
            {name: "斗地主", value: false}
        ],
        val: ""
    });

    // 列表添加一项
    function addVal() {
        if (stateUnref.val.trim() !== "") {
            stateUnref.list.push({name: stateUnref.val.trim(), value: false});
            stateUnref.val = "";
        }
    }

    // 列表添加一项
    function addList() {
        if (state.val.trim() !== "") {
            state.list.push({
                name: state.val.trim(),
                value: false
            });
            state.val = "";
        }
    }

    // 计算属性
    let total = computed(() => state.list.length);

    // toRefs: 解构对象中所有的key
    // toRef: 结构对象中的某个key

    // 侦听器
    let num = ref(1);
    let doubleNum = computed(() => num.value * 2);

    let timer = null;
    //
    onMounted(() => {
        timer = setInterval(() => {
            num.value++;
            if (num.value > 10) {
                num.value = 1;
            }
        }, 1000);
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    let desc = ref(null);
    // 侦听器
    watch(num, (val, oldVal) => {
        const p = desc.value;
        p.textContent = `通过refs的形式使用watch监听显示的值从 ${oldVal} 变为了 ${val}`;
    });


    return {count, add, num, doubleNum, desc, state, addList, ...toRefs(stateUnref), addVal, total};
}

export default useAddTodo;
