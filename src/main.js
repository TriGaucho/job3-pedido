import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
