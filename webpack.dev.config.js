const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index.bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      target: 'local',
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src/lib'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],

            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-default-from',
              'babel-plugin-styled-components',
            ],
          },
        },
      },

      {
        test: /\.png$/,
        use: 'file-loader',
      },

      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },
};
