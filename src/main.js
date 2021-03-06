import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { store } from "../Vuex//store";
import VueResource from 'vue-resource';
import App from "./App";

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000';






Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
