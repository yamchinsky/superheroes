import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Auth',
    path: '/',
    component: lazy(() => import('../pages/authPage/AuthPage')),
    exact: true,
    isPrivate: false,

    isRestricted: true
  },

  {
    name: 'NotFound',
    path: '',
    component: lazy(() => import('../pages/notFound/NotFound')),
    exact: true,
    redirectTo: '/',
    isPrivate: false
  }
];
