const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  // 跨域 将接口域名填入target，再拼接路径
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn', //聚合接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //重写路径
          '^/api': ''
        }
      },
      //360接口
      '/foo': {
        target: 'https://bang.360.cn', //
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //重写路径
          '^/foo': ''
        }
      }
    }
  }
})
