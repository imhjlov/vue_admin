import { createRouter, createWebHistory } from 'vue-router';
import { categoryRouter, subCategoryRouter } from './categoryRouter';

const router = createRouter({
  history: createWebHistory(), // # 제거
  routes: [...categoryRouter, ...subCategoryRouter],
});

export default router;
