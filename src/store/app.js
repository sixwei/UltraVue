import router from '../router'
import qs from 'qs'
import API from '../api'
import Cookie from 'js-cookie'

const app = {
  state: {

  },
  mutations: {
   
  },
  actions: {

    logout({ commit, state }) {
      Cookie.remove('app_token')
      Cookie.remove('app_isAdmin')
      Cookie.remove('auth_menus')
      Cookie.remove('app_user')
      router.push('/login')
    },
   
  }
};

export default app;
