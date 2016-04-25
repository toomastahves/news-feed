import webpack from 'webpack';
import config from '../../webpack.config.dev';
import WebpackDevServer from 'webpack-dev-server';

export const startWebpackDevServer = () => {
  new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    proxy: {
      '*': 'http://localhost:3000'
    }
  })
  .listen(1337, 'localhost', () => {
    console.log('WebpackDevServer started at localhost:1337');
  });
};
