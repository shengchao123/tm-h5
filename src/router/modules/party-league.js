export default [
  {
    path: '/party-league',
    name: 'PartyLeague',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/party-league/index.vue')
  }
]
