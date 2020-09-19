var webpack = require("webpack");
var path = require("path");

module.exports = {
  // Since webpack 4 we will need to set in what mode webpack is running
  mode: "development",
  // This will be the entry file for all of our React code
  entry: [__dirname + "/client/index.jsx"],
  // This will be where the final bundle file will be outputed
  output: {
    path: path.join(__dirname, "/server/public/js/"),
    filename: "bundle.js",
    //publicPath: "server/public/js/",
  },
  // Adding babel loader to compile our javascript and jsx files
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(jpg|png)$/,
        use: ["file-loader?name=/assets/img/[name].[ext]"],
      },

      {
        test: /\.js|jsx/,
        exclude: /node_modules/,

        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: ["@babel/preset-env", "@babel/preset-react"],
            // },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
};
