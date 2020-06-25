import Vue from 'vue'
import App from './App.vue'

// import 'jquery/src/jquery.js'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './route/index.js'
const router = new VueRouter({
	mode: "history",
	routes
}) 





new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
