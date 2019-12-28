module.exports = {
  devServer: {
    overlay: {
      // 遮罩层
      warnings: false,
      errors: false,
      // 关闭eslint时加上
      lintOnSave: false

    },
    proxy: {
      // 反向代理
      // 注意：只要更改了vue.config.js文件就要重启服务器
      '/v2': {
        target: 'https://m.wowdsgn.com/',
        changeOrigin: true
      },
      '/pages': {
        target: 'https://m.wowdsgn.com'
      },
      '/itemdetail':{
        target: 'https://m.wowdsgn.com'
      },
      '/brand': {
        target: 'https://m.wowdsgn.com',
      }
    }
  }
}
