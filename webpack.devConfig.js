const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3050/',
      'webpack/hot/dev-server',
      'script-loader!jquery/dist/jquery.min.js',
      './src/styles/app.sass'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader',
          {
            loader: 'sass-loader?sourceMap',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules/foundation-sites/scss')
              ]
            }
          }]
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader?name=/images/[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}
