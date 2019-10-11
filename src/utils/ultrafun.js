// 常用方法，关于数据遍历，提取，去重等；

const filterObj = function (sourceObj) {
    let ress = new Map()
    let tarObj = sourceObj.filter(
      a => !ress.has(a.zxID) && ress.set(a.zxID, 1)
    );
    console.log(typeof tarObj)
    return tarObj
  }
  
  const isValidIP = function (ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
  }
  
  const changeNull2Zero = function (obj) {
    for (let key in obj) {
      console.log(key)
      if (obj[key] == null) {
        obj[key] = 0
      }
    }
  }
  
  export default {
    filterObj,
    isValidIP,
    changeNull2Zero
  };
  