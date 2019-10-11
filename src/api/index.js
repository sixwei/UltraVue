
// 测试环境
const url = 'http://192.168.189.146:58055/mv';
const nmsw ='http://192.168.189.146:58085';
const uflowPath = 'http://192.168.16.220:8090'    //220//102
const pasm ='http://192.168.189.146:58045';



import ultrafun from '../utils/fun'

const {hostname, port, protocol} = window.location

console.log("所在环境地址是",hostname,port,protocol)

// let url = ''
// let nmsw = ''
// let uflowPath = ''
// let pasm = ''

// if(ultrafun.isValidIP(hostname)==false){
//   url = `${protocol}//${hostname}/mv`
//   nmsw = `${protocol}//${hostname}`
//   uflowPath = `${protocol}//${hostname}`
//   pasm = `${protocol}//${hostname}`
// }else if(hostname=='58.248.186.21'){
//   url = 'http://58.248.186.21:13007/mv';
//   nmsw ='http://58.248.186.21:13007';
//   uflowPath = 'http//gree.mv.gd165.com'
//   pasm ='http://58.248.186.21:13007';
//  }else{
//   url = `http://${hostname}:58055/mv`;
//   nmsw =`http://${hostname}:58085`;
//   uflowPath = 'http://10.63.0.73:8090'
//   pasm =`http://${hostname}:58045`;
// }


// 公用
const DOMAINPATH = url;
const BASEPATH = url + '/mv';
const NMSPATH = nmsw + '/nmsw';
const SUBPATH = '/api';



import Cookie from 'js-cookie'
import axios from 'axios'
import qs from 'qs'
export default {

  domainport: DOMAINPATH,
  basePath: BASEPATH + SUBPATH,
  nmswPath: NMSPATH,
  pasmUrl:pasm,
  nsmwdomain:nmsw,
  hostname:hostname,

  login: {
    token: `/uaa/oauth/token`,

  },
  index: {
    

  },

  common:{
    addLogServer: (logparams) => {
      let params = logparams.split(',')
      let data = {
        user:Cookie.get('user'),
        module:params[0],
        operate:params[1],
        description:params[2]
      }
      console.log(params[0])
      axios.post(BASEPATH + '/api/addlog',qs.stringify(data)).then(()=>{
        console.log("日志")
      })
    },
  }

}
