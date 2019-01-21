const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',

  entry: {
    app: resolve('docs/src/index.jsx')
  },

  output: {
    path: resolve('docs/dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunk-[name].[chunkhash:8].js',
    publicPath: 'https://aotuzuche.github.io/auto-ui/'
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
            loader: './scripts/lib/markdown-loader.js',
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
        use: ['style-loader', 'css-loader', 'px2rem-loader?remUnit=100']
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

    // 提取html模板
    new HtmlWebpackPlugin({
      template: 'docs/src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'dependency'
    }),

    new FriendlyErrorsWebpackPlugin({
      onErrors: function(severity, errors) {
        console.log(severity, errors)
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.md', '.scss', '.css'],
    alias: {
      'auto-ui': resolve('packages'),
      src: resolve('docs/src'),
      '@': resolve('')
    }
  }
}
