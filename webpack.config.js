const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// remove the old generated bundles so they don't clutter the space
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
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
    })
  ],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
};