import Mock from "mockjs"
import API from "../api/index"

export default Mock.mock(API.index.querynetworkTop5,{
    'result':{
        'code':200,
        'msg':"success",
        'data':[
            {ip:"123",inflow:"15",outflow:"30",cpu:"50",meroy:"40"},
            {ip:"124",inflow:"25",outflow:"10",cpu:"20",meroy:"30"},
            {ip:"125",inflow:"45",outflow:"20",cpu:"30",meroy:"40"},
            {ip:"126",inflow:"15",outflow:"80",cpu:"40",meroy:"50"},
            {ip:"127",inflow:"35",outflow:"30",cpu:"50",meroy:"40"},
        ]
    }
})

// 厂家：华为、H3C、浪潮、DELL、曙光、IBM、迪普、安恒、博科
// 类型：网络设备、安全设备、存储、物理机、宿主机
Mock.mock(API.index.queryEquInfo,{
    result:{
        code:200,
        msg:"success",
        data:[
            {changshang:"华为",type:"宿主机",value:"20"},
            {changshang:"华为",type:"网络设备",value:"20"},
            {changshang:"华为",type:"安全设备",value:"20"},
            {changshang:"华为",type:"存储",value:"20"},
            {changshang:"华为",type:"物理机",value:"20"},

            {changshang:"H3C",type:"宿主机",value:"20"},
            {changshang:"H3C",type:"网络设备",value:"20"},
            {changshang:"H3C",type:"安全设备",value:"20"},
            {changshang:"H3C",type:"存储",value:"20"},
            {changshang:"H3C",type:"物理机",value:"20"},

            {changshang:"浪潮",type:"宿主机",value:"20"},
            {changshang:"浪潮",type:"网络设备",value:"20"},
            {changshang:"浪潮",type:"安全设备",value:"20"},
            {changshang:"浪潮",type:"存储",value:"20"},
            {changshang:"浪潮",type:"物理机",value:"20"},

            // {changshang:"DELL",type:"宿主机",value:"20"},
            // {changshang:"DELL",type:"网络设备",value:"20"},
            // {changshang:"DELL",type:"安全设备",value:"20"},
            // {changshang:"DELL",type:"存储",value:"20"},
            // {changshang:"DELL",type:"物理机",value:"20"},

            // {changshang:"曙光",type:"宿主机",value:"20"},
            // {changshang:"曙光",type:"网络设备",value:"20"},
            // {changshang:"曙光",type:"安全设备",value:"20"},
            // {changshang:"曙光",type:"存储",value:"20"},
            // {changshang:"曙光",type:"物理机",value:"20"},

            // {changshang:"IBM",type:"宿主机",value:"20"},
            // {changshang:"IBM",type:"网络设备",value:"20"},
            // {changshang:"IBM",type:"安全设备",value:"20"},
            // {changshang:"IBM",type:"存储",value:"20"},
            // {changshang:"IBM",type:"物理机",value:"20"},

            // {changshang:"迪普",type:"宿主机",value:"20"},
            // {changshang:"迪普",type:"网络设备",value:"20"},
            // {changshang:"迪普",type:"安全设备",value:"20"},
            // {changshang:"迪普",type:"存储",value:"20"},
            // {changshang:"迪普",type:"物理机",value:"20"},

            {changshang:"安恒",type:"宿主机",value:"20"},
            {changshang:"安恒",type:"网络设备",value:"20"},
            {changshang:"安恒",type:"安全设备",value:"20"},
            {changshang:"安恒",type:"存储",value:"20"},
            {changshang:"安恒",type:"物理机",value:"20"},


            {changshang:"博科",type:"宿主机",value:"20"},
            {changshang:"博科",type:"网络设备",value:"20"},
            {changshang:"博科",type:"安全设备",value:"20"},
            {changshang:"博科",type:"存储",value:"20"},
            {changshang:"博科",type:"物理机",value:"20"},
        ]
    }
})

Mock.mock(API.index.queryAlarmTableData,{
    result:{
        code:200,
        msg:"success",
        data:[
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
            {grade:"严重",time:"2018-05-12 12:20:35",attackTags:"海上",flow:"25",attackType:"12",attackStatus:"6",detail:"haha"},
        ]
    }
})

Mock.mock(API.index.querymoniTableData,{
    result:{
        code:200,
        msg:"success",
        data:[
            {equname:"交换机",equnumber:"100",alarmnumber:"13"},
            {equname:"路由器",equnumber:"100",alarmnumber:"13"},
            {equname:"宿主机",equnumber:"100",alarmnumber:"13"},
            {equname:"负载均衡",equnumber:"100",alarmnumber:"13"},
            {equname:"缓存",equnumber:"100",alarmnumber:"13"},
            {equname:"安全设备",equnumber:"100",alarmnumber:"13"},
            {equname:"防火墙",equnumber:"100",alarmnumber:"13"},
            {equname:"服务器",equnumber:"100",alarmnumber:"13"},
            {equname:"交换机2",equnumber:"100",alarmnumber:"13"},
            {equname:"交换机3",equnumber:"100",alarmnumber:"13"},
            {equname:"交换机4",equnumber:"100",alarmnumber:"13"},
        ],
        equtotal:"1100"


    }
})