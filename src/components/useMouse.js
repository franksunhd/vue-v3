// 鼠标乱跑 显示鼠标的坐标

// 功能都可以随便拆分
// 按需加载

import {ref, onMounted, onUnmounted} from 'vue';

export default function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function update(e) {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });

    return {x, y};
}
