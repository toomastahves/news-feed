const path = require('path');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    client: [
      './client/index',
      'webpack-dev-server/client?http://localhost:1337'
    ],
    admin: [
      './client.admin/index',
      'webpack-dev-server/client?http://localhost:1337'
    ]
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
