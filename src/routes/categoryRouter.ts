import HomeView from '../views/HomeView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import type { Component } from 'vue';
import permissionList from '@/data/permission.json';
import user from '@/data/user.json';

interface categoryRouterType {
  path: string;
  name: string;
  component: Component;
  beforeEnter?: (from: any, to: any, next: any) => void;
  meta?: any;
}

interface permissionType {
  originalLabel: string;
  label: string;
  bit: number;
}

/**
 * 권한 체크 함수
 * @param to: 현재 이동할 라우터 정보
 * @param from: 이전 라우터 정보
 * @param next 이동할 페이지
 **/
const requireAuth = (to: any, from: any, next: any) => {
  const { auth } = to.meta;
  // 유저의 퍼미션 비트 계산 조건문
  const { permission } = permissionList;

  const checkPermissionBit = () => {
    if (user.profile.permissionBit === 1) return 1;
    const result = permission.find((i: permissionType) => i.label === auth);
    if (result) {
      return user.profile.permissionBit & result.bit;
    }
    return 0;
  };

  if (checkPermissionBit() !== 0 || checkPermissionBit() === 1) {
    next();
  }
  return next({ path: '/' });
};

export const categoryRouter: categoryRouterType[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth,
  },
  {
    path: '/news',
    name: 'news',
    beforeEnter: requireAuth,
    component: NewsView,
    meta: { auth: '배너' },
  },
  {
    path: '/ask',
    name: 'ask',
    beforeEnter: requireAuth,
    component: AskView,
    meta: { auth: '이벤트' },
  },
  {
    path: '/jobs',
    name: 'jobs',
    beforeEnter: requireAuth,
    component: JobsView,
  },
];

export const subCategoryRouter: categoryRouterType[] = [
  { path: '/user/:user', name: 'user', component: UserView },
  { path: '/item', name: 'item', component: ItemView },
];
