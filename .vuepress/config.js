module.exports = {
  base: '/blog/',
  "title": "ScalerWang",
  "description": "This is my blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ/vx 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ/VX：134920519',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '喜欢的主题特效可以去个人信息',
          style: 'text-align: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/blog/donate'
        },
      ]
    }],
    // [
    //   'vuepress-plugin-helper-live2d', {
    //     // 是否开启控制台日志打印(default: false)
    //     log: false,
    //     live2d: {
    //       // 是否启用(关闭请设置为false)(default: true)
    //       enable: true,
    //       // 模型名称(default: hibiki)>>>取值请参考：
    //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //       model: 'miku',
    //       display: {
    //         position: "right", // 显示位置：left/right(default: 'right')
    //         width: 235, // 模型的长度(default: 135)
    //         height: 300, // 模型的高度(default: 300)
    //         hOffset: 65, //  水平偏移(default: 65)
    //         vOffset: 0, //  垂直偏移(default: 0)
    //       },
    //       mobile: {
    //         show: false // 是否在移动设备上显示(default: false)
    //       },
    //       react: {
    //         opacity: 0.8 // 模型透明度(default: 0.8)
    //       }
    //     }
    //   }
    // ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    // ['@ikangxu/vuepress-plugin-mouse-effects', {
    //   type: 'particle', // 暂时只内置了一个特效   内置的特效有 particle|click-word
    //   words: ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"], // click-word效果需要用到的文字提示
    //   style: {
    //     cursor: 'Altr_Vnd', // 支持自定义cursor，没有则为默认样式
    //     borderRadius: '50%', // 形状 particle效果需要用到
    //     zIndex: 2,
    //     colors: ["#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"], // 颜色
    //     fontSize: 14, // click-word效果需要用到的文字显示大小
    //     r: {
    //       min: 5, // 半径最小值
    //       max: 15 // 半径最大值
    //     },
    //     dx: {
    //       min: -10, // 横向偏移量最小值
    //       max: 10 // 横向偏移量最大值
    //     },
    //     dy: {
    //       min: -10, // 纵向偏移量最小值
    //       max: 10  // 纵向偏移量最大值
    //     }
    //   }
    // }]
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ],
    ["vue-canvas-effect", {
    }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ],
  "theme": "reco",
  "themeConfig": {
    record: 'ICP 鲁ICP备2021001055号-1',
    recordLink: 'https://www.beianx.cn/bacx/scalerwang.com',
    cyberSecurityRecord: '鲁ICP备2021001055号-1',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo',
    // 项目开始时间，只填写年份
    // startYear: '2021',
    valineConfig: {
      appId: 'UlfRs0fTKPbDz7RR413ehzTW-gzGzoHsz',// your appId
      appKey: 'tKbRcKt6O0qhPg6aSgUdMLXN', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "个人信息",
        "icon": "reco-message",
        "link": "/docs/theme-reco/"
      },
      {
        "text":"留言板",
        "icon": "reco-suggestion",
        "link": "/message/"
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/WangScaler",
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "姓王叫先生的平台展示",
        "desc": "my shop",
        "email": "1349320519@qq.com",
        "link": "http://www.scalerwang.com/shop"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ScalerWang",
    "authorAvatar": "/logo.png",
    "record": "鲁ICP备2021001055号-1",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
}