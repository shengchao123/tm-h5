export default [
  {
    path: '/original-travel',
    name: 'OriginalTravel',
    component: () => import('@/views/original-travel/index.vue')
  },
  {
    path: '/travel-form',
    name: 'TravelForm',
    component: () => import('@/views/original-travel/travel-form/index.vue')
  },
  {
    path: '/point-guide',
    name: 'PointGuide',
    component: () => import('@/views/original-travel/point-guide/index.vue')
  }
]
