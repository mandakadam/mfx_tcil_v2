import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/leads/:id',
    component:  () => import(/* webpackChunkName: "LeadsView" */ '../views/LeadsView.vue')
  },
  {
    path: '/transactions',
    component: () => import(/* webpackChunkName: "TransactionsView" */ '../views/TransactionsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
