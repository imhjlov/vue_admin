import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

const router = createRouter({
  history: createWebHistory(), // # 제거
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    { path: '/user', name: 'user', component: UserView },
    { path: '/item', name: 'item', component: ItemView },
  ],
});

export default router;
