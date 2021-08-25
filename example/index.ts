import { createApp } from 'vue';
import App from './app.vue';
import VueScrollUp from '../src';

const app = createApp(App);

app.component(VueScrollUp.name, VueScrollUp);
app.mount('#app');
