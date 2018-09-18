const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const address = require('address')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const port = 3000

module.exports = {
  mode: 'development',

  entry: {
    app: resolve('example/index.js')
  },

  output: {
    path: resolve('dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          'babel-loader?cacheDirectory',
          'eslint-loader'
        ],
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'px2rem-loader?remUnit=100',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE)
    }),

    // 热更新
    new webpack.HotModuleReplacementPlugin(),

    // 提取html模板
    new HtmlWebpackPlugin({
      template: 'example/index.html',
      filename: 'index.html',
      inject: 'body', // 所有javascript资源将被注入至body底部
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true, // 压缩成一行
        removeAttributeQuotes: false // 删除引号
      },
      chunksSortMode: 'dependency' // 按照不同文件的依赖关系来排序
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `
          本地==> http://localhost:${port}
          路由==> http://${address.ip()}:${port}
          `
        ]
      },
      onErrors: function(severity, errors) {
        console.log(severity, errors)
      }
    })
  ],
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    open: true,
    inline: true,
    quiet: true,
    disableHostCheck: true,
    port: port
  }
}
