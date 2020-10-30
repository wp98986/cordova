export const routes = [
  {
    path: '/',
    exact: false,
    component: '@/layouts/BasicLayout',
    routes: [
      { exact: true, path: '/', redirect: '/life' },
      { exact: true, path: '/life', component: '@/pages/Life/index' },
      { exact: true, path: '/koubei', component: '@/pages/Koubei/index' },
      {
        exact: true,
        path: '/friend',
        component: '@/pages/Friend/indexfriend',
      },
      // { path: '/my', component: '@/pages/My/index' },
    ],
  },
];
