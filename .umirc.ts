import { defineConfig } from 'umi';
import routes from './config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由
  routes: routes,
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
  //使用哈希路由解決cordovad打包后IOS页面无法跳转的问题
  history: {
    type: 'hash',
  },
  publicPath: './',
  // 开启按需加载
  dynamicImport: {},
  devServer: {
    open: true,
  },
});
