const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // This is what we load in index.html
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,  // Add this rule to load CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: './public',
    open: true,
    hot: true,
    historyApiFallback: true,  // This ensures all requests are routed to index.html
  }
};
