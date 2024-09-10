window.config={
    logo: './Rainbow.png', // 网站logo
    title:"PassWall.Cloud™", // 网站标题
    host:"https://airport404.com/", // 后端接口地址
    storeHome: {
        title: '选择最适合你的订阅计划', // 套餐页标题
        description: '若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长（仅限周期订阅适用）' // 套餐页描述
    },
    SignPage: {
        title: '覆盖全球的高速网络，解锁所有网站从 PassWall.Cloud 开始', // 登录页标题
        desc1: 'High-speed network covering the whole world', // 登录页描述1
        desc2: 'Unblock All websites with PassWall.Cloud', // 登录页描述2
        inviteCodeEdit: false, // 是否允许用户修改邀请码
    },
    homeClient: {
        display: true, // 是否显示客户端下载教程卡片
        clients: [
            {
                key: 'windows',
                title: 'Windows客户端(64位)',
                icon: 'ri:windows-fill',
                downloadLink: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64-setup.exe', // Windows客户端下载地址
                knowledgeLink: 'https://passwall.cloud/#/dashboard/knowledge/3', // 使用教程地址
            },
            {
                key: 'windows',
                title: 'Windows客户端(arm64架构)',
                icon: 'ri:windows-fill',
                downloadLink: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_arm64-setup.exe', // Windows客户端下载地址
                knowledgeLink: 'https://passwall.cloud/#/dashboard/knowledge/3', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客户端(intel芯片)',
                icon: 'ri:finder-fill',
                downloadLink: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64.dmg', // Mac客户端下载地址
                knowledgeLink: 'https://passwall.cloud/#/dashboard/knowledge/2', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客户端(appleM芯片)',
                icon: 'ri:finder-fill',
                downloadLink: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_aarch64.dmg', // Mac客户端下载地址
                knowledgeLink: 'https://passwall.cloud/#/dashboard/knowledge/2', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客户端',
                icon: 'ri:android-fill',
                downloadLink: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.10.4/cmfa-2.10.4-meta-universal-release.apk', // Android客户端下载地址
                knowledgeLink: 'https://passwall.cloud/#/dashboard/knowledge/1', // 使用教程地址
            }
            // {
            //     key: 'ios',
            //     title: 'iOS客户端',
            //     icon: 'ri:apple-fill',
            //     downloadLink: 'https://apps.apple.com/us/app/shadowrocket/id932747118', // iOS客户端下载地址
            //     knowledgeLink: '/dashboard/knowledge/4', // 使用教程地址
            // },
            // {
            //     key: 'knowledge',
            //     title: '查看其它教程',
            //     icon: 'ri:questionnaire-fill',
            //     downloadLink: null,
            //     knowledgeLink: '/dashboard/knowledge', // 使用教程地址
            // }
        ],
    },
    homeBanner: {
        display: false, // 是否显示首页横幅
        title: '邀请好友，共享优惠', // 首页banner标题
        link: '/dashboard/invite', // 首页banner链接，站内链接
        btnText: '立即邀请', // 首页banner按钮文字
        // element: 'https://gd-hbimg.huaban.com/e68ceb12ffbd7dbeb698b3c5f4d2ed90185241be25183e-tShOmr_fw1200webp', // 首页banner元素图片
        background: 'linear-gradient(to right, rgb(198, 107, 255) 0%, rgb(245, 236, 254) 40%, rgb(255, 235, 59) 100%)'
        // bgImg: 'https://gd-hbimg.huaban.com/246ac6f06aeeab3b0c7e5908e7693b9a0e1b8a5249899-hB42f3_fw1200', // 首页banner背景图片
    }
}
