import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http=axios
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
