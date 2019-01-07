import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueUnits from 'vue-units'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueUnits)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
