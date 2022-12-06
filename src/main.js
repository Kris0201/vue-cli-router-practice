import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router屬於模組化套件，並在 /router/index.js 中使用預設匯出，在Vue Cli中要使用套件的話只要「 import 某某套件名 」，並在底下加上 「use(某某套件名)」即可

createApp(App).use(router).mount('#app');
// 這裡.mount('#app')掛載的目標在/public/index.html裡面
