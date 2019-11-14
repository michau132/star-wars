import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: []
  },
  getters: {
    getFavouriteChars: (state) => {
      return state.favourites
    } 
  },
  mutations: {
    ADD_FAV_CHAR(state, character) {
      if(state.favourites.some(el => el.url === character.url)) {
        return
      }
      state.favourites.push(character)
    }
  },
  actions: {
    addFavouriteChar({commit}, character) {
      commit('ADD_FAV_CHAR', character)
    }
  }
})
