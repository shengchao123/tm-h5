export default [
  {
    path: '/original-travel',
    name: 'OriginalTravel',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/original-travel/index.vue')
  },
  {
    path: '/travel-form',
    name: 'TravelForm',
    component: () => import('@/views/original-travel/TravelForm.vue')
  },
  {
    path: '/point-guide',
    name: 'PointGuide',
    component: () => import('@/views/original-travel/point-guide/index.vue')
  }
]
