import React from 'react';
import AuthRoute from './components/AuthRoute';
import LazyRoute from './components/LazyRoute';
import Layout from '@/pages/Layout';

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))
const TestPage = React.lazy(() => import('@/pages/TestPage'))

export const routerConfigs = [
  {
    path: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <LazyRoute><Home /></LazyRoute>,
      },
      {
        path: '/test',
        element: <LazyRoute><TestPage /></LazyRoute>,
      },
    ]
  },
  {
    path: '/login',
    element: <LazyRoute><Login /></LazyRoute>
  },
  {
    path: '*',
    element: <LazyRoute><NotFound /></LazyRoute>
  },
]