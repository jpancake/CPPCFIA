import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import path from 'path'
import chalk from 'chalk'

import config from './webpack.devConfig'

const PORT = 3050

const server = new WebpackDevServer(webpack(config), {
  setup: (app) => {

    app.set('views', path.join(__dirname, 'public'))
    app.set('view engine', 'pug', { pretty: true })
    app.get('/', (req, res) => {
      res.render('index')
    })
    app.get('/about', (req, res) => {
      res.render('about')
    })
    app.get('/about/faculty', (req, res) => {
      res.render('faculty')
    })
    app.get('/academics', (req, res) => {
      res.render('curriculum')
    })
    app.get('/student-organizations', (req, res) => {
      res.render('student-organizations')
    })
  },
  contentBase: './public',
  port: PORT,
  hot: true,
  historyApiFallback: true,
  compress: false,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
})

server.listen(PORT, 'localhost', () => {
  console.log(chalk.bgWhite.bold(`Webpack Development Server is up and running on port ${PORT}`))
  console.log(chalk.blue(`Browse to http://localhost:${PORT}`))
})
