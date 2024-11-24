import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/leads/:id',
    component:  () => import(/* webpackChunkName: "LeadsView" */ '../views/LeadsView.vue')
  },
  {
    path: '/transactions',
    component: () => import(/* webpackChunkName: "TransactionsView" */ '../views/TransactionsView.vue'),
    children: [
      {
        path: 'TransactionsHistory',
        component: () => import(/* webpackChunkName: "TransactionsHistory" */ '../views/TransactionsHistory.vue'),
      },
      {
        path: 'CustomerDetails',
        component: () => import(/* webpackChunkName: "CustomerDetails" */ '../views/CustomerDetails.vue'),
      },
      {
        path: 'TravelDetails',
        component: () => import(/* webpackChunkName: "TravelDetails" */ '../views/TravelDetails.vue'),
      },
      {
        path: 'ITRDetails',
        component: () => import(/* webpackChunkName: "ITRDetails" */ '../views/ITRDetails.vue'),
      },
      {
        path: 'PaymentDetails',
        component: () => import(/* webpackChunkName: "PaymentDetails" */ '../views/PaymentDetails.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
