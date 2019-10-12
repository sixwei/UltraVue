import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers, commonRouters, appRouter} from './defines'
import iView from 'iview'
import store from '../store'
import Cookie from 'js-cookie'


Vue.use(VueRouter)

const RouterConfig = {
  // mode: 'history',
  routes: routers
}
const router = new VueRouter(RouterConfig)

//根据路由解析出菜单
store.commit('SET_APP_MENUS', appRouter.children)

// const token = store.getters.token
// if(token) { //假如有token，则根据token去取账号，否则跳到登录页面
//   store.dispatch('fetchAccount')
// }

// const whiteList = ['/login', '/403', '/404', '/500'];// 不重定向白名单

router.beforeEach((to, from, next) => {
  let agent = navigator.userAgent;
  console.log(agent);
  var regStr_ie = /MSIE\/[\d.]+/gi;
  var regStr_ff = /Firefox\/[\d.]+/gi;
  var regStr_chrome = /Chrome\/[\d.]+/gi;
  var regStr_saf = /Safari\/[\d.]+/gi;
  var edge = /rv:[\d.]+/gi;

  var reg = /([\w\u4e00-\u9fa5\-]*)=([\w\u4e00-\u9fa5\-\d%]*)/ig;
  var ac = [];
  console.log(window.location.href)
  window.location.href.replace(reg, function (params, key, value) {
    console.log(reg)
    console.log('key------>' + key + "----->value--->" + value);
    if(key=='user'){
      Cookie.set('userName',value)
      Cookie.set('user',value)
    }
    ac[key] = value;
  });
  //IE
  if (agent.indexOf('rv') > 0 && agent.indexOf('.NET') > 0) {
    console.log(agent.match(edge) + '---->' + (agent.match(edge) + '').match(/[\d]+/));
  }
  //IE
  if (agent.indexOf('MSIE') > 0) {
    console.log(agent.match(regStr_ie) + '---->' + (agent.match(regStr_ie) + '').match(/[\d]+/));
  }

  //firefox
  if (agent.indexOf('Firefox') > 0) {
    console.log(agent.match(regStr_ff) + '---->' + (agent.match(regStr_ff) + '').match(/[\d]+/));
  }

  //Chrome
  if (agent.indexOf('Chrome') > 0) {
    console.log(agent.match(regStr_chrome) + '---->' + (agent.match(regStr_chrome) + '').match(/[\d]+/));
  }

  //Safari
  if (agent.indexOf('Safari') > 0 && agent.indexOf('Chrome') < 0) {
    console.log(agent.match(regStr_saf) + '---->' + (agent.match(regStr_saf) + '').match(/[\d]+/));
  }
  iView.LoadingBar.start()
  let username = Cookie.get('userName');

  console.log("1***********username=" + username)
  if (username == undefined || username == null|| username=="") {
    console.log("username == undefined || username == null------", username)
    username = 'root';
  }


  if (ac['userName']) {
    console.log("-----ac[]", ac['userName'])
    username = ac['userName'];
  }

  console.log('username---3--->' + username);
  Cookie.set('user', username)
  next()
  console.log("获取用户名")

  // const token = Cookie.get('app_token')
  // const isAdmin = Cookie.get('app_isAdmin')
  // const authMenus = Cookie.get('auth_menus')
  // if(whiteList.indexOf(to.path) > -1) {
  //   next()
  // } else {
  //   if(token) {
  //     if(to.path === '/login') {
  //       next('/')
  //     } else {
  //       if(isAdmin == 1 || authMenus.indexOf(to.name) > -1) {
  //         next()
  //       } else { //没权限，禁止访问
  //         next('/403')
  //       }
  //     }
  //   } else {
  //     next('/login') // 否则全部重定向到登录页
  //   }
  // }
})

router.afterEach((to) => {
  iView.LoadingBar.finish();
  // window.scrollTo(0, 0);
});

export default router
