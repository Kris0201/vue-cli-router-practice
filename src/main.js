import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
// 這裡.mount('#app')掛載的目標在/public/index.html裡面
