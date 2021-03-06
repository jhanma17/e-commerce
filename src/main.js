import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
