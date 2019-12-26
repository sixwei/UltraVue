
// 测试环境

let ipconfig = ""

if(process.env.NODE_ENV ==='development'){
  ipconfig = window.ipconfig.dev 
}else(
  ipconfig = window.ipconfig.pro
)

let {url,nmsw,pasm} = ipconfig

console.log(url,nmsw,pasm,'haha')
// 公用
const DOMAINPATH = url;
const BASEPATH = url + '/mv';
const NMSPATH = nmsw + '/nmsw';

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
