import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCalendarCustom from 'vue-calendar-custom'

Vue.config.productionTip = false
Vue.use(VueCalendarCustom)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
