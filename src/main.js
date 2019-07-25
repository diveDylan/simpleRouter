import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router/index'
router.init()
// test async import function 
// const a = () => import('./App.vue')
// async function get() {
//   let b = await a()
//   console.log(b)
//   return b
// }
// console.log(App, get())

Vue.config.productionTip = false

Vue.prototype.$router = router

new Vue({
  render: h => h(App),
}).$mount('#app')
