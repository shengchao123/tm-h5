export default [
  {
    path: '/',
    redirect: '/original-travel'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]
