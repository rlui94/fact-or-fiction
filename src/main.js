import Vue from 'vue'
import App from './App.vue'

require('dotenv').config()

console.log(process.env.VUE_APP_HOST)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
