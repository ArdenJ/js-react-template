const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/assets/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './src/index.html',
    }),
  ],
  optimization: {
    minimize: false,
  },
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
  },

}
