const path = require('path');

module.exports = {
  entry: './index.ts',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "..", 'docs'),
    publicPath: './docs'
  },
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: ['node_modules']
  },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './docs',
        historyApiFallback: true
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
};