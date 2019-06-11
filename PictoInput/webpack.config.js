const path = require('path');

module.exports = {
  entry: './index.ts',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "..", 'docs'),
    publicPath: './docs'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
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
    }
};