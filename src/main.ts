import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './css/index.css';

const app = createApp(App);

app.use(routes);

// quasar ui templete 사용하기 위함
app.use(Quasar, { plugins: {} });

app.mount('#app');
