export default [
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/mine/index.vue')
  }
]
