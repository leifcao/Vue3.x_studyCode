import {createRouter, createWebHistory} from 'vue-router'


//第一个router是参数，第二个routes是配置路由中的routes,可以只写一个routes
const routes = [
  {path: "/", name: 'HelloWorld', component: import('../components/HelloWorld.vue')},
  {path: "/model", name: 'model', component: import('../components/model.vue')},
  {path: "/testRouter", name: 'testRouter', component: import('../components/testRouter.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

