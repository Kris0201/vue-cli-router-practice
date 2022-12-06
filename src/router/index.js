import { createRouter, createWebHashHistory } from 'vue-router'; // 載入vue-router
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/', // 路徑
    name: 'Home',
    component: Home, // 引入的元件名稱(import Home from...)
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/newpage', // 路由表的第一層前面要加上 /
    name: '新增頁面', // 允許中文
    component: () => import('../views/NewPage.vue'),
    children: [
      // 巢狀路由：在newpage 頁面中加入三個子頁面(ComponentA, ComponentB, NamedView)
      {
        path: 'a', // 子路由路徑前面不需加/
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b', // 子路由路徑前面不需加/
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'dynamicRouter/:id', // 冒號後的id是自定義名稱，是動態路由動態的部分
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        // 具名路由示範
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        // 具名路由中的巢狀路由
        children: [
          {
            path: 'c2a',
            components: {
              // namedView元件中有兩個router-view，因此必須載入兩個元件，且以物件型式帶入，視圖名稱即為物件名稱
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },

          },
          {
            path: 'a2b',
            components: {
              // namedView元件中有兩個router-view，因此必須載入兩個元件，且以物件型式帶入，視圖名稱即為物件名稱
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },

          },
        ],
      },
    ],
  },

  //     {
  //       path: 'dynamicRouter/:id',
  //       component: () => import('../views/DynamicRouter.vue'),
  //     },
  //     {
  //       path: 'routerNavigation',
  //       component: () => import('../views/RouterNavigation.vue'),
  //     },
  //     {
  //       path: 'dynamicRouterByProps/:id',
  //       component: () => import('../views/DynamicRouterByProps.vue'),
  //       props: (route) => {
  //         console.log('route:', route);
  //         return {
  //           id: route.params.id,
  //         };
  //       },
  //     },
  //     {
  //       path: 'namedView',
  //       component: () => import('../views/NamedView.vue'),
  //       children: [
  //         {
  //           path: 'c2a',
  //           components: {
  //             left: () => import('../views/ComponentC.vue'),
  //             right: () => import('../views/ComponentA'),
  //           },
  //         },
  //         {
  //           path: 'a2b',
  //           components: {
  //             left: () => import('../views/ComponentA.vue'),
  //             right: () => import('../views/ComponentB'),
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // 404 頁面
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue'),
  // },
  // // 重新導向
  // {
  //   path: '/newPage/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'Home',
  //   },
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(to, from, savedPosition);
  //   if (to.fullPath.match('newPage')) {
  //     return {
  //       top: 0,
  //     };
  //   }
  //   return {};
  // },
});

export default router; // export至src>main.js
