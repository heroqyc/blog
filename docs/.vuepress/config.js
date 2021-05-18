module.exports = {
  title: 'yuancong',
  description: '永远相信美好的事情即将发生',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: '/avatar.jpg',
    blogConfig: {
      //   category: {
      //     location: 3,
      //     text: '分类'
      //   },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    // navbar: false,  //禁用所有页面的导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/foo/' },
      { text: '后端', link: '/bar/' },
      { text: '面试', link: 'https://google.com' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: '选择语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ] //下拉列表
      }
    ],
    sidebar: {
      '/foo/': [
        ['', '前端1'],
        ['one', '前端2'],
        ['two', '前端3']
      ],
      '/bar/': [
        ['', '后端1'],
        ['three', '后端2'],
        ['four', '后端3']
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
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['shizuku'],
        clean: true,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'mm9GfunOEe2bVDivp2Sftj8w-gzGzoHsz',
          appKey: 'pqp00sS7JHlY8dDXmgHlPzCI'
        }
      }
    ],
    [
      'meting',
      {
        //metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          // 网易
          server: 'netease',
          // 读取歌单
          type: 'playlist',
          mid: '696441716'
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0
        },
        mobile: {
          // 手机端去掉cover图
          cover: false
        }
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
