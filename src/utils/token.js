

// function getUserIP(onNewIP) {
//     let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
//     let pc = new MyPeerConnection({
//         iceServers: []
//       });
//     let noop = () => {
//       };
//     let localIPs = {};
//     let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
//     let iterateIP = (ip) => {
//       if (!localIPs[ip]) onNewIP(ip);
//       localIPs[ip] = true;
//     };
//     pc.createDataChannel('');
//     pc.createOffer().then((sdp) => {
//       sdp.sdp.split('\n').forEach(function (line) {
//         if (line.indexOf('candidate') < 0) return;
//         line.match(ipRegex).forEach(iterateIP);
//       });
//       pc.setLocalDescription(sdp, noop, noop);
//     }).catch((reason) => {
//     });
//     pc.onicecandidate = (ice) => {
//       if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//       ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
//     };
//   }
//
//
//   getUserIP(function(ip){
//         console.log("获取本地的ip地址是",ip)
//   })




import axios from 'axios'
import API from '@/api'
import Cookie from 'js-cookie'
import qs from 'qs'
import store from '../store'

function getToken(){
  // let dataparams = {
  //   username:Cookie('userName'),
  //   password:Cookie('ipvalue')
  // }

  let dataparams = {
    "username":'root',
    "password":'192.168.16.254'
  }
  console.log("参数是TTTTTTTTTTTTTTTTTTTTTTT",dataparams)
  axios.post(API.login.getToken,dataparams).then(res=>{
    console.log("得到的token是",res)

    store.state.app.mvtoken = res.data.token

  })
}




export default {getToken}

