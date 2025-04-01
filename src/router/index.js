import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DemoView1 from '@/views/DemoView1.vue'
import DemoView2 from '@/views/DemoView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo',
      children: [
        {
          path: 'demo1',
          name: 'demo1',
          component: DemoView1,
        },
        {
          path: 'demo2',
          name: 'demo2',
          component: DemoView2,
        },
      ],
    },
  ],
})

export default router
