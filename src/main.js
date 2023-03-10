require('bootstrap/dist/css/bootstrap.min.css');

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store";

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
