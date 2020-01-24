import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/LandingPage.vue'
import GameLobby from '../views/GameLobby.vue'
import WaitingRoom from '../views/waitingRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // component: WaitingRoom
  },
  {
    path: '/rooms',
    name: 'roomList',
    component: GameLobby
  },
  {
    path: '/waiting-room',
    name: 'waitingRoom',
    component: WaitingRoom
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
