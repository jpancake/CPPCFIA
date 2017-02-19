const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3050/',
      'webpack/hot/dev-server',
      'script-loader!jquery/dist/jquery.min.js',
      'slick-carousel/slick/slick.scss',
      'slick-carousel/slick/slick-theme.scss',
      './src/index.jsx'
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
                path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                path.resolve(__dirname, 'node_modules/slick-carousel/slick')
              ]
            }
          }]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader?name=/images/[name].[ext]"
      },
      {
        test: /\.(ttf|otf|eot|svg|woff)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}
