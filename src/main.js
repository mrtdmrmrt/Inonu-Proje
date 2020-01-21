import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import {router} from "./router"
import paginate from 'vuejs-paginate'

new Vue({
  el: '#app',
  store,
  router,
  paginate,
  render: h => h(App),
})
