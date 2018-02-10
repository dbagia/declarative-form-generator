var path = require('path')
var webpack = require('webpack')
var cities = require('./src/data/cities.json')
module.exports = {
  entry: [
    'babel-polyfill',
    './src'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/')
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
    before: function (app) {
      app.get('/cities', function (req, res) {
        res.send(cities)
      })
    }
  },
  module: {
    rules: [
      {
        test: /[*]\.test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js[x]?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }

    ]
  }
}
