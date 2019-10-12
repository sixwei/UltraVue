const AppMenuConfig = {
    menu_level_one: [
        { name: '首页', link: 'home', icon: 'home', id: 'MVNMSW100', show: '1' },
        { name: '拓扑', link: 'topo', icon: 'global', id: 'MVNMSW200', show: '1' },
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

    ],

};
export default AppMenuConfig;



