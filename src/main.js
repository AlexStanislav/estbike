import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import EventBus from '@/assets/modules/EventBus'

library.add(faFacebook, faInstagram, faAddressCard, faEnvelope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
window.EventBus = new EventBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
