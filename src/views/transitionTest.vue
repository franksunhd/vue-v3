<template>
    <div id="demoList">
        <pre>
            <p class="text">transition 类名变更</p>
            <p class="text">v-enter ===>  v-enter-from</p>
            <p class="text">v-leave ===>  v-leave-from</p>
        </pre>

        <button @click="show = !show">Toggle</button>

        <transition name="fade">
            <p class="name" v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "transitionTest",
        setup() {
            const show = ref(true);

            return {show}
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    p.text {
        font-size: 20px;
    }

    p.name {
        font-size: 20px;
        margin-top: 20px;
    }
</style>
