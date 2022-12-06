import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  if(to.path !== '/'){
    window.EventBus.dispatch('sectionnothome')
  }else{
    window.EventBus.dispatch("sectionishome")
  }
  window.EventBus.dispatch("showpreloader")
  next()
})

export default router
