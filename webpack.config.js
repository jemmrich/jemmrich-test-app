const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    //allowedHosts: [
    //  'mygame.com',
    //  'gsx.mygame.com',
    //],
    static: [
      {
        directory: './',
        // publicPath: './public',
        serveIndex: true,
      },
      {
        directory: './public',
      },
      {
        directory: './assets',
      },
    ],
    devMiddleware: {
      // very good explaination of memory vs disk
      // https://stackoverflow.com/a/42475466
      publicPath: './public/',
      writeToDisk: true,
   }, 
    compress: true,
    //host: 'mygame.com',
    port: 8080,
    hot: false,
    liveReload: true,
  },
}
