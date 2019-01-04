import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import  { store } from './store/store';
import App from "./App";

Vue.use(VueRouter);


const router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
