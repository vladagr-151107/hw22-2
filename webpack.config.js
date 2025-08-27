const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle[fullhash].js",
    clean: true
  },
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "styles[fullhash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "68"
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i, 
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      `...`, 
      new CssMinimizerPlugin()
    ]
  }
};
