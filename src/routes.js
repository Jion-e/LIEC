'use strict'
// const Home = resolve => require(['./pages/home.vue'], resolve)
const Home = require('./pages/home.vue')
const NewsView = resolve => require(['./pages/newsView.vue'], resolve)
const Login = resolve => require(['./pages/login.vue'], resolve)
const Register = resolve => require(['./pages/register.vue'], resolve)

export const routes = [
  {path: '/', name: '首页', component: Home},
  {path: '/newsView/:id', name: '新闻详情', component: NewsView},
  {path: '/login', name: '登录', component: Login},
  {path: '/register', name: '注册', component: Register},
]
