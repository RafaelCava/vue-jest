import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const DEFAULT_TITLE = 'Page Vue-Jest'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(to => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE
})

export default router
