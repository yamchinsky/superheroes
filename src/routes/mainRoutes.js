import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Auth',
    path: '/',
    component: lazy(() => import('../pages/authPage/AuthPage')),
    exact: true,
    isPrivate: false,
    redirectTo: '/home',
    isRestricted: true
  },
  {
    name: 'Home',
    path: '/home',
    component: lazy(() => import('../pages/homePage/HomePage')),
    exact: true,
    isPrivate: true,
    redirectTo: '/'
  },
  {
    name: 'CurrentHero',
    path: '/hero/:id',
    component: lazy(() => import('../pages/heroPage/HeroPage')),
    exact: true,
    isPrivate: true,
    redirectTo: '/'
  },

  {
    name: 'NotFound',
    path: '',
    component: lazy(() => import('../pages/notFound/NotFound')),
    exact: true,
    redirectTo: 'null',
    isPrivate: false
  }
];
