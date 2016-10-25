'use strict'
const Home = resolve => require(['./pages/home.vue'], resolve)
const NewsView = resolve => require(['./pages/newsView.vue'], resolve)

export const routes = [
  {path: '/', name: '首页', component: Home},
  {path: '/newsView/:id', name: '新闻详情', component: NewsView},
]
