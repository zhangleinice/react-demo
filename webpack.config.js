var path = require('path');
var webpack = require('webpack');
// 抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
// 1.webpack安装extract-text-webpack-plugin，加上@next安装该插件的最新版
// 2.mini-css-extract-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack构建离线应用
const ServiceWorkerWebpackPlugin =  require('serviceworker-webpack-plugin');

module.exports = {
  // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
  mode: 'production',
  // source-map方便调试，默认false不生成source-map
  devtool: 'source-map',
  entry: {
    app: './index.js',
    // b: './b.js'
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    // path.resolve(__dirname)解析相对路径，变成绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // 配置处理模块规则
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        // 不需要打包
        exclude: path.resolve(__dirname, "node_modules"),
        // 只打包src文件夹下，优化打包速度
        // include: path.resolve(__dirname, "./src/"),
        query: {
          // latest包含了es6，7，8全部
          presets: ['latest', 'react'],
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: path.resolve(__dirname, "node_modules"),
        // 将eslint-loader的执行顺序放到最前面
        enforce: 'pre'
      },
      {
        // 安装less和less-loader
        test: /\.less$/,
        // loader: "style-loader!css-loader!postcss-loader!less-loader",
        // 抽离css样式
        //loader执行顺序从右到左
        //css-loader读取css文件，style-loader将css注入到js里，js里面混有css
        //通过querystring方式传参, minimize开启css压缩
        loaders: ExtractTextPlugin.extract({
          // fallback在未提取CSS时应该使用的loader
          fallback: "style-loader",
          // 使用什么loader去提取
          use: ['css-loader?minimize', 'postcss-loader', 'less-loader']
        })
      }
    ],
  },
  plugins: [
    // "transform-decorators-legacy",
    // 从.js文件中提取.css文件
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    // 启动热更新
    new webpack.HotModuleReplacementPlugin(),
    // generate an HTML5 file
    new HtmlWebpackPlugin({
      title: 'hello',
      // 输出文件，文件目录是相对于webpackConfig.output.path路径而言的
      // 指定生成的html文件内容中的link和script路径是相对于生成目录下的
      filename: 'index.html',
      template: 'index.html',
      // 依赖的js，默认引入entry的全部js，css
      chunks: ['app'],
      minify: false
    }),
    // 多页面，多个HtmlWebpackPlugin实例
    // new HtmlWebpackPlugin({
    //   title: 'hello',
    //   filename: 'b.html',
    //   template: 'page/b.html',
    //   chunks: ['b'],
    //   minify: false,
    //   hash: true
    // })
  ],
  // http服务,默认http协议。使用devServer时默认开启--watch
  devServer: {
    // 配置主机
    host: 'localhost',
    // 端口
    port: '7001',
    // 开启热更新，需要配合new webpack.HotModuleReplacementPlugin()
    hot: true,
    // 配置服务器文件根目录,
    // 写成dist/app.html报错,默认只能打开index.html
    contentBase: path.join(__dirname, 'dist'),
    // 第一次使用自动打开网页
    open: true,
    // 启用gzip压缩优化，默认false
    compress: true
  }
}