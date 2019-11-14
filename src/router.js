import Vue from 'vue'
import Router from 'vue-router'
import FavouriteCharacters from './components/FavouriteCharacters.vue'
import FindCharacters from './components/FindCharacters.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/favourite',
      component: FavouriteCharacters
    },
    {
      path: '/find',
      component: FindCharacters
    },
  ]
})
