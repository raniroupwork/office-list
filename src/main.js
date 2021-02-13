import Vue from 'vue';
import App from './containers/App.vue';
import store from './store';
import router from './router';
import './assets/styles/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
