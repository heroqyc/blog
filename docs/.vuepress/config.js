module.exports = {
    title: 'yuancong',
    description: '永远相信美好的事情即将发生',
    theme: 'reco',
    themeConfig: {
        // navbar: false,  //禁用所有页面的导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/foo/' },
            { text: '后端', link: '/bar/' },
            { text: '面试', link: 'https://google.com' },
            {
                text: '选择语言', ariaLabel: 'Language Menu', items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }]  //下拉列表
            }
        ],
        sidebar: {
            '/foo/': [
                ['', '前端1'],
                ['one', '前端2'],
                ['two', '前端3'],
            ],
            '/bar/': [
                ['', '后端1'],
                ['three', '后端2'],
                ['four', '后端3'],
            ]
        },
        // 备案
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2017',
        author: 'yuancong'
    },
    "plugins": [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["shizuku"],
                clean: true,
                messages: {
                    welcome: '我是lookroot欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                }
            }
        ],
    ]
}