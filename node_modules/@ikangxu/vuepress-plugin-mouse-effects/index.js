const { resolve } = require('path')

module.exports = (options, ctx) => ({
  define () {
    const { style, type, words } = options
    const { pages, themeConfig, siteConfig } = ctx
    return {
      define_border_radius: style.borderRadius || '50%',
      define_z_index: style.zIndex || 2,
      define_colors: style.colors || ["#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"], // 颜色
      define_font_size: style.fontSize || '12',
      define_r: style.r || {
        min: 5, // 半径最小值
        max: 15 // 半径最大值
      },
      define_dx: style.dx || {
        min: -10, // 横向偏移量最小值
        max: 10 // 横向偏移量最大值
      },
      define_dy: style.dy || {
        min: -10, // 纵向偏移量最小值
        max: 10  // 纵向偏移量最大值
      },
      define_cursor: style.cursor || '',
      define_type: type || '',
      define_words: words || ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"]
    }
  },
  name: '@ikangxu/vuepress-plugin-mouse-effects',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'MouseEffects'
})