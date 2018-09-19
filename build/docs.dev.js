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
    app: resolve('docs/src/index.jsx')
  },

  output: {
    path: resolve('docs/dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: ['/node_modules/']
      },
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          {
            loader: 'markdown-it-react-loader',
            options: {
              markdownItReact: function() {
                return {
                  className: 'doc' // 默认也是doc
                }
              }
            }
          }
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
      template: 'docs/src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'dependency'
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
  resolve: {
    extensions: ['.js', '.jsx', '.md', '.scss', '.css'],
    alias: {
      'auto-ui': resolve('packages'),
      'src': resolve('docs/src'),
      '@': resolve('')
    }
  },
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
