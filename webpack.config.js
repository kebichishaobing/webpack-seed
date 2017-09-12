 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var webpack = require('webpack');
 module.exports = {
     entry: './src/index.js',
     output: {
         path: __dirname + '/dist',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
     plugins: [
         new HtmlWebpackPlugin(),
         new webpack.HotModuleReplacementPlugin()
     ],
     devServer: {
         contentBase: "./dist",
         historyApiFallback: true,
         port: '8181',
         inline: true,
         hot: true
     }
 };