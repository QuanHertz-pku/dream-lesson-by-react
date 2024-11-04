const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//below will be export as a configuration object for node
module.exports = {
  entry: './src/index.js',  //The entry point of our application
  output: { //what webpack do is make our react code into a single HTML file to cover all our web
    path: path.resolve(__dirname, 'dist'),  //so we should tell webpack where to put the output file
    // path.resolve(__dirname, 'dist') means the path of the output file is /dist/bundle.js
    filename: 'bundle.js', //and the name of the output file
  },
  module: {  //and the module section is where we tell webpack how to handle our code
    rules: [
      { 
        //test tell webpack which files to handle
        test: /\.(js|jsx)$/, 
        //if you are interested of regular expression,I can tell you how it works

        // exclude means which files to ignore
        exclude: /node_modules/,
        // use means which loader to use
        use: {
            // babel-loader is a loader that allows us to use ES6 syntax
          loader: 'babel-loader',
        },
      },{
        // 匹配 .json 文件
        test: /\.json$/,
        
        // 告诉 Webpack 将 JSON 文件视为模块并解析其内容
        type: 'json'
      },{
        // 匹配所有 .css 文件
        test: /\.css$/,
        use: [
          'style-loader', // 将 CSS 插入到 DOM 中
          'css-loader'    // 处理 CSS 文件中的 `@import` 和 `url()` 等
        ]
      }
    ],
  },
  resolve: { 
    //it means if your import target is Hello.js you can just writ Hello
    extensions: ['.js', '.jsx','.json','.css'],
    //if you want to set the alias for your project,you can do it here
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ //this plugin will generate an index.html file for us like our template
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },//Now we use the newer configuration of webpack5 ^
    //contentBase: path.join(__dirname, 'dist'), //this is the path of our server
    compress: true, //use compress to imporve the speed
    port: 3001, //here we can dicide our port
    historyApiFallback: true, // 支持路由重写
  },
};
