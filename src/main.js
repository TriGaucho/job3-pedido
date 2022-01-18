import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueMask from 'v-mask'

import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false
Vue.use(VueMask)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
