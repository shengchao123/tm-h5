export default [
  {
    path: '/original-travel',
    name: 'OriginalTravel',
    component: () => import('@/views/original-travel/index.vue')
  },
  {
    path: '/travel-form',
    name: 'TravelForm',
    component: () => import('@/views/original-travel/TravelForm.vue')
  }
]
