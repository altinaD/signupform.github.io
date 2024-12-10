import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/signup-form',
    },
    {
      path: '/signup-form',
      name: 'signup-form',
      component: Main,
      beforeEnter: (to, from) => {
        document.title = 'Signup-form'
      },
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/Success.vue'),
      beforeEnter: (to, from) => {
        document.title = 'Signup-form - Success'
      },
    },
  ],
})

export default router
