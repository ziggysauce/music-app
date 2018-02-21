const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

env({
  file: './.env',
  type: 'ini',
});

gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'server/app.js',
    watch: ['server/'],
    ignore: ['client/**'],
  });
});

gulp.task('webpack-dev-server', () => {
  const compiler = webpack(webpackConfig);
  new WebpackDevServer(compiler, {
    contentBase: './public',
    publicPath: '/public',
    hot: true,
    inline: true,
    stats: true,
    clientLogLevel: 'info',
    proxy: [
      {
        context: ['/api', '/', '/sock'],
        target: `http://localhost:${process.env.PORT}`,
        changeOrigin: true,
      },
    ],
  }).listen(8080, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server ', err);
    }
    gutil.log('[webpack-dev-server]', 'WPDS - Listening in on http://localhost:8080');
  });
});

gulp.task('default', ['nodemon', 'webpack-dev-server']);