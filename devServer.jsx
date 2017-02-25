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
    app.get('/academics/student-organizations', (req, res) => {
      res.render('student-organizations')
    })
    app.get('/academics/student-organizations/missa', (req, res) => {
      res.render('./clubs/missa')
    })
    app.get('/academics/student-organizations/swift', (req, res) => {
      res.render('./clubs/swift')
    })
    app.get('/academics/student-organizations/fast', (req, res) => {
      res.render('./clubs/fast')
    })
    app.get('/academics/student-organizations/css', (req, res) => {
      res.render('./clubs/css')
    })
    app.get('/academics/scholarships', (req, res) => {
      res.render('scholarships')
    })
    app.get('/projects', (req, res) => {
      res.render('projects')
    })
    app.get('/research', (req, res) => {
      res.render('research')
    })
    app.get('/events', (req, res) => {
      res.render('events')
    })
    app.get('/contact', (req, res) => {
      res.render('contact')
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
