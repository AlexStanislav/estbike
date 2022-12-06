import Vue from 'vue'
import Vuex from 'vuex'
import moto from "@/assets/data/moto.json"
import detail from "@/assets/data/detail.json"
import popular from "@/assets/data/popular.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moto: moto,
    popular: popular,
    isChrome: navigator.userAgent.indexOf("Chrome") > -1,
    isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    selectedModel: {},
    activeBrand: 'honda',
    activeCategory: '',
    details: detail
  },
  mutations: {
    selectModel(state, payload){
      state.selectedModel = payload
    },
    selectBrand(state, payload){
      state.activeBrand = payload
    },
    selectCategory(state, payload){
      state.activeCategory = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
