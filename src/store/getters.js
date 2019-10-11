const getters = {
  token: state => state.app.token,
  user: state => state.app.user,
  appMenus: state => state.app.appMenus,
  authMenus: state => state.app.authMenus,
  isAdmin: state => state.app.isAdmin,
  checkShow: state=>state.app.checkShow,
  check:state=>state.app.check,

  mvtoken:state=>state.app.mvtoken,


  //自服务字段
  checkResult:state=>state.apply.checkResult,

};
export default getters
