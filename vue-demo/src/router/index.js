import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App'
import Index from '../components/index/Index.vue'
import List from '../components/index/List.vue'
import Whisper from '../components/whisper/Whisper'
import Leacots from '../components/leacots/Leacots'
import Album from '../components/album/Album'
import About from '../components/about/About'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/articles',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/articles/java',
          name: 'List',
          component: List
        },
        {
          path: '/articles/qd',
          component: List
        },
        {
          path: '/articles/db',
          component: List
        },
        {
          path: '/articles',
          redirect: '/articles/java'
        }
      ]
    },
    {
      path: '/whisper',
      component: Whisper
    },
    {
      path: '/leacots',
      component: Leacots
    },
    {
      path: '/album',
      component: Album
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/articles'
    }
  ],
  linkActiveClass: 'active'
})
