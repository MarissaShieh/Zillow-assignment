const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// remove the old generated bundles so they don't clutter the space
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: { 
              limit: 1000, // Convert images < 1mb to base64 strings
              name: 'assets/[hash].svg'
          } 
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.jsx', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].css"
    })
  ],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
};