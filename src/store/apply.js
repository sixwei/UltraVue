import API from '../api'

const apply = {
  state: {
    checkResult:"",
  },
  mutations: {
    setCheckResult:(state,ips)=>state.checkResult = ips
  },
  actions: {


    checkoutEqu(context,texts){

      let equs = texts.map(item => {
        return item.monitordevice
      })
      console.log(equs)
      let equsString = equs.join(',')
      console.log(equsString)
      this.$store.state.app.check = true

      axios.get(API.index.monitorApply, {
        params: {"ips": equsString}
      }).then(res => {
        console.log("设备检测结果是", res)
        if (res.result == "false") {
          this.$Message.info("未通过检测")

          //处理结果
          console.log(res)
          let checkResult = {}
          res.detail.map(item => {
            let key = Object.keys(item)[0].trim()
            let value = item[Object.keys(item)[0]]
            checkResult[key] = value
          })
          console.log("数据组织结果是", checkResult)
          this.checkResult = checkResult
        } else {
          this.handleSubmit(type)
        }
      })



      context.commit("setCheckResult",ips)

    },

  }
};

export default apply;
