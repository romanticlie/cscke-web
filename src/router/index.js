import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决跳转重复路由时的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location)
    .catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location) {
  return originalReplace.call(this, location)
    .catch(err => err)
}

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/Index.vue')
  },
  {
    path: '/exception/exc404',
    name: 'Exc404',
    component: () => import('@/views/exception/Exc404.vue')
  },
  {
      path: '/tourists/login',
      name: 'Login',
      component: () => import('@/views/tourists/Login.vue')
  },
  {
      path: '/notify/authorized',
      name: 'Notify',
      component: () => import('@/views/notify/Notify.vue')
  },
  {
    path: '/user/center',
    name: 'User',
    component: () => import('@/views/user/Center.vue')
}
]


const router = new VueRouter({
  routes: constantRoutes
})


export default router
