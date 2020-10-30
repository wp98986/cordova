import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由
  routes: [
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
        { path: '/login', component: '@/pages/HomeDetails' },
      ],
    },
  ],
  // 配置代理
  // proxy: {
  //   '/site': {
  //     target: 'http://www.redstarbuy.com',
  //     changeOrigin: true,
  //     cookieDomainRewrite: 'localhost',
  //   },
  //   '/boss': {
  //     target: 'http://boss.redstarbuy.com',
  //     changeOrigin: true,
  //     cookieDomainRewrite: 'localhost',
  //   },
  //   '/supplier': {
  //     target: 'http://supplier.redstarbuy.com',
  //     changeOrigin: true,
  //     cookieDomainRewrite: 'localhost',
  //   },
  // },
  // 配置主题色
  theme: {
    '@brand-primary': '#1DA57A',
  },
  publicPath:"./"
});
