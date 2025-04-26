import { createRouter, createWebHistory } from 'vue-router'

import TodoList from '../components/TodoList.vue'
import TodoDetail from '../components/TodoDetail.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoList,
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetail,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
