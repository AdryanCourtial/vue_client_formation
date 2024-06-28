import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnesView from '../views/PersonnesView.vue'
import EntrepriseView from '../views/EntreprisesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personnes',
      name: 'personnes',
      component: PersonnesView
    },
    {
      path: '/entreprises',
      name: 'entreprises',
      component: EntrepriseView
    },
  ]
})

export default router
