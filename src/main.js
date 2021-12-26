import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(AOS.init()).use(store).use(router).mount('#app')
