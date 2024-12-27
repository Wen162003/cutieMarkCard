import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
      {
        path: '/tablero',
        name: 'tablero',
        component: ()=> import('../views/TableView.vue')
      },
      {
        path: '/prueba',
        name: 'prueba',
        component: ()=> import('../views/VistaPrueba.vue')
      }
  ],
})

export default router
