import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局引入css
import "./assets/css/base.css";
import "./assets/css/common.css";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
