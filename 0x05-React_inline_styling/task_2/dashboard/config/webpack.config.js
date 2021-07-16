const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    port: 8564,
    hot: true,
    compress: true
    // watchContentBase: true // static file changes will trigger a full page reload
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        use: ['file-loader', 'image-webpack-loader']
      }
    ]
  }
};
