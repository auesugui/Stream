const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,

        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
    },
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true, //hot reload. When data hasn't settled and data is still updating, it'll keep updating.
    historyApiFallback: true, //We're taking AP History. LOL
    host: 'localhost', //I think this may be our host
    port: 8008, // connect for port 8008. This is our "front end"
    proxy: {
      '/api': {
        target: 'http://localhost:3000', //backend
        secure: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
