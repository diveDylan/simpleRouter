import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.prototype.$router = router

new Vue({
  render: h => h(App),
}).$mount('#app')
