
// 测试环境
const url = 'http://192.168.189.146:58055/mv';
const nmsw ='http://192.168.189.146:58085';
const uflowPath = 'http://192.168.16.220:8090'    //220//102
const pasm ='http://192.168.189.146:58045';

// 公用
const DOMAINPATH = url;
const BASEPATH = url + '/mv';
const NMSPATH = nmsw + '/nmsw';



import Cookie from 'js-cookie'
import axios from 'axios'
import qs from 'qs'
export default {

  domainport: DOMAINPATH,
  nmswPath: NMSPATH,
  pasmUrl:pasm,
  nsmwdomain:nmsw,

  login: {
    token: `/uaa/oauth/token`,

  },
  index: {
    

  },

}
