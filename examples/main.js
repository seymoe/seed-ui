import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SeedUI from '../src'
import '../src/styles/index.scss'

Vue.config.productionTip = false

Vue.use(SeedUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
