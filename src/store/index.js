import Vue from 'vue'
import Vuex from 'vuex'
import moto from "@/assets/data/moto.json"
import popular from "@/assets/data/popular.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moto: moto,
    popular: popular,
    isChrome: navigator.userAgent.indexOf("Chrome") > -1,
    isFirefox: navigator.userAgent.indexOf("Firefox") > -1
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
