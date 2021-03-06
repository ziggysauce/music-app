const path = require('path');
const webpack = require('webpack');


const SRC = path.resolve(__dirname, './client');
const PUBLIC = path.resolve(__dirname, './client/public');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './client/index.jsx'
    ]
  }, 
  output: { //create output path
    filename: 'bundle.js',
    path: PUBLIC,
    publicPath: '/public',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
        exclude: [/node_modules/], // doesn't include node modules
        loader: 'babel-loader', // uses babel as transpiler
      },
      {
        test: /\.(css|sass|scss)$/, // checks for any files ending in .css, .sass, or .scss
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader'],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: './client/src/styles/assets/fonts/BEYNO.ttf'
        }
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map' // show path in console for debugging
}