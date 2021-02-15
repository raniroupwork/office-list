// Modules
import Vue from 'vue';
import store from './store';
import router from './router';
// Components
import App from './containers/App.vue';
// Styles
import './assets/styles/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
