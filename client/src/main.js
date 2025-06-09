import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import socket from './socket';

const app = createApp(App)
app.config.globalProperties.$socket = socket;
app.use(router).mount('#app')
