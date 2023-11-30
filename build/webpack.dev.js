const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: "development", // 开发模式
  devtool: 'eval-cheap-module-source-map',
  devServer: { // 本地服务配置
    port: 3000,
    hot: true,
    historyApiFallback: true,
    compress: false,
    static: {
      directory: path.resolve(__dirname, '../public')
    },
  },
})