import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const config = {
  api: `https://casaadmin.kubelab.dk`,
};

createApp(App)
  .provide('api', config.api)
  .use(router)
  .mount('#app');
