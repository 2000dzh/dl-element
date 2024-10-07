import { createApp } from 'vue';
import App from './App.vue';
import DlElement from 'dl-element';
import "dl-element/dist/index.css";

createApp(App).use(DlElement).mount('#app');
