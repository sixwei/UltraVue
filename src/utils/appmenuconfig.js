const AppMenuConfig = {
    menu_level_one: [
        { name: '监控首页', link: 'home', icon: 'home', id: 'MVNMSW100', show: '1' },
        { name: '拓扑管理', link: 'topo', icon: 'global', id: 'MVNMSW200', show: '1' },
        {
            name: '告警管理', link: 'alarm', icon: 'warning', id: 'MVNMSW300', show: '1', item: [
                { name: '活动告警', link: 'activeAlarm', icon: '', id: 'MVNMSW301', show: '1' },
                { name: '历史告警', link: 'historyAlarm', icon: '', id: 'MVNMSW302', show: '1' },
            ]
        },
        {
            name: '服务质量', link: 'slmm', icon: 'desktop', id: 'MVNMSW400', show: '1', item:
                [
                    { name: 'QOS服务质量', link: 'qosmonitor', icon: '', id: 'MVNMSW401', show: '1' },
                    { name: 'QOS配置管理', link: 'qosConfigure', icon: '', id: 'MVNMSW402', show: '1' },
                    { name: 'SLA服务质量', link: 'slamonitor', icon: '', id: 'MVNMSW403', show: '1' },
                    { name: 'SLA采集管理', link: 'slcollector', icon: '', id: 'MVNMSW404', show: '1' },
                ]
        },
        {
            name: '自服务', link: 'apply', icon: 'warning', id: 'MVNMSW500', show: '1', item:
                [
                    { name: '专线管理', link: 'sllist', icon: '', id: 'MVNMSW501', show: '1' },
                    { name: '申请管理', link: 'apply', icon: 'warning', id: 'MVNMSW502', show: '1' },
                ]
        },
        {
            name: '资源管理', link: 'unicomPm', icon: 'desktop', id: 'MVNMSW600', show: '1',
            // item:
            // [
            //     { name: '设备性能管理', link: 'unicomPm', icon: '', id: '11', show: '1' },
            //     { name: '内网设备性能管理', link: 'innerPm', icon: '', id: '12', show: '1' },
            // ]
        },
        {
            name: 'IP流量分析', link: 'ipflowAnalysis', icon: 'add', id: 'MVNMSW900', show: '1', item:
                [   
                    { name: '分析概览', link: 'ipflowAnalysis', icon: '', id: 'MVNMSW901', show: '1' },
                    { name: '主机流量分析', link: 'hostflowAnalysis', icon: '', id: 'MVNMSW902', show: '1' },
                    { name: '应用流量分析', link: 'applyAnalysis', icon: '', id: 'MVNMSW903', show: '1' },
                    { name: '协议流量分析', link: 'protocolanalysis', icon: '', id: 'MVNMSW904', show: '1' },
                    { name: '协议端口流量分析', link: 'portanalysis', icon: '', id: 'MVNMSW905', show: '1' },
                ]
        },
        {
            name: '报表管理', link: 'report', icon: 'add', id: 'MVNMSW700', show: '1', item:
                [   // 效能分析
                    // { name: 'SLA分析', link: 'slaAnalysis', icon: '', id: '131', show: '1' },
                    // { name: '网络质量月报', link: 'networkAnalysis', icon: '', id: 'MVNMSW702', show: '1' },
                    // { name: '效能分析', link: 'effectAnalysis', icon: '', id: 'MVNMSW702', show: '1' },
                    { name: '网络质量月报', link: 'wlzlmonthreport', icon: '', id: 'MVNMSW701', show: '1' },
                    { name: '告警派单', link: 'alterpd', icon: '', id: 'MVNMSW702', show: '1' },
                    { name: 'QOS指标', link: 'alterpd', icon: '', id: 'MVNMSW703', show: '1' },
                    { name: 'SLA指标', link: 'alterpd', icon: '', id: 'MVNMSW704', show: '1' },
                ]
        },
        {
          name: '系统维护', link: 'setting', icon: 'setting', id: 'MVNMSW800', show: '1',item:
            [
              { name: '大屏展示', link: 'bigView', icon: '', id: 'MVNMSW805', show: '1' },
              { name: '告警策略', link: 'alertRulesMain', icon: '', id: 'MVNMSW801', show: '1' },
              { name: '性能门限', link: 'thresholdlist', icon: '', id: 'MVNMSW802', show: '1' },
              { name: '采集策略', link: 'scheduleViewMain', icon: '', id: 'MVNMSW803', show: '1' },
              { name: '自管理', link: 'selfmanageViewMain', icon: '', id: 'MVNMSW804', show: '1' },
            ]
        },
    ],

};
export default AppMenuConfig;



