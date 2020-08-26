module.exports = {
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: './src',
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
