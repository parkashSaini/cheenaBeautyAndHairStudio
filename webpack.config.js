// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { Template } = require("webpack");

// const isProduction = process.env.NODE_ENV == true;

const stylesHandler = "style-loader";

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index_bundle.js',
  },
   plugins :[
    new HtmlWebpackPlugin({
      hash: true,
      title: "Your custom title",
      template: './src/index.html'
    })
    ],
  devServer: {
    static: './public',
    hot: true,
    port:3000
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  // if (isProduction) {
  //   config.mode = "production";

  //   config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  // } else {
    config.mode = "development";
  // }
  return config;
};
