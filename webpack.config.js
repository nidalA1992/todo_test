const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOABAL_CSS_REGEXP = /\.global\.css$/;


function setupDevTool() {
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}

module.exports = {
  resolve: { 
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, 'src/index.tsx'), 

  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client.js'
  },

  module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          use: ['ts-loader']
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              }
            }
          ],
          exclude: GLOABAL_CSS_REGEXP,
        },
        {
          test: GLOABAL_CSS_REGEXP,
          use: ['style-loader', 'css-loader'],
        }
    ]
  },

  devtool: setupDevTool(),

  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
  ],

  devServer: {
    port: 8000,
    open: true,
    hot: IS_DEV
  },
}
