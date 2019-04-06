import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/ttcy'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/tree',
      component: resolve => require(['@/components/mayi/tree.vue'], resolve),
      meta: {
        title: '蚂蚁种树'
      }
    },
    {
      path: '/zanzhu',
      component: resolve => require(['../components/zanzhu.vue'], resolve)
    },
    {
      path: '/bottom',
      component: resolve => require(['../components/flex/bottom.vue'], resolve)
    },
    {
      path: '/ttcy',
      component: resolve => require(['../components/ycy/ttcy.vue'], resolve)
    },
    {
      path: '/bang',
      component: resolve => require(['../components/ycy/bang.vue'], resolve)
    },
    {
      path: '/bangtotal',
      component: resolve => require(['../components/ycy/bangtotal.vue'], resolve)
    },
    {
      path: '/bangnav',
      component: resolve => require(['../components/ycy/bangnav.vue'], resolve)
    },
     {
      path: '/speedbang',
      component: resolve => require(['../components/ycy/speedbang.vue'], resolve)
    },
    {
      path: '/daybang',
      component: resolve => require(['../components/ycy/daybang.vue'], resolve)
    },
     {
      path: '/liuyan',
      component: resolve => require(['../components/ycy/liuyan.vue'], resolve)
    },
    {
      path: '/404',
      component: resolve => require(['../components/common/404.vue'], resolve)
    },
    {
      path: '/403',
      component: resolve => require(['../components/common/403.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/ttcy'
    }
  ],
  mode: 'history'
});

//不需要登录认证的路由
var notLimitRoutes=['/ttcy','/bang'];
//全局路由守卫
// router.beforeEach((to, from, next) => {
  
//   console.log('跳转到:', to.fullPath);
//   if (notLimitRoutes.indexOf(to.path)!=-1) {
//     next();
//   }
//   else {
//     next({ path: '/ttcy' })
//     var token = sessionStorage.getItem('token');
//     //如果没登录,都导向登录页
//     if (!token) {
//       if (to.path !== '/login') {
//         next({ path: '/login' })
//       }
//       else {
//         next();
//       }
//     }
//     else {
//       next();
//     }
//   }

// })

export default router
