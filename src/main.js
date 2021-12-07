import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import VueForm from 'vue-form'




Vue.use(Vuesax, {
  // options here
})
Vue.use(VueForm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
