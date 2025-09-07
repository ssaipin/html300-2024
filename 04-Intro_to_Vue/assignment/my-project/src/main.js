import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//import SCSS
import './assets/scss/main.scss'

// import font awesome
import '@fortawesome/fontawesome-free/css/all.css'

// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
