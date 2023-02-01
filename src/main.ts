import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(router);

// quasar ui templete 사용하기 위함
app.use(Quasar, { plugins: {} });

app.mount('#app');
