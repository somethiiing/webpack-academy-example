const path = require("path");
// <<IMPORT PLUGINS>>
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.jpeg$/,
        use: [
          { loader:"url-loader", options: {
              limit: 10000
          } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ContextReplacementPlugin()
  ]
}


/*
module.exports = {
  entry: "" <-- first file to start the dependency graph.
  output: {
    "filename":  ""  name of the file,
    path: uses absolute path.
  },
  modules: {
    rules/loaders: how to treat files before they're added to the dependency graph
                      on a per file basis.
  },
  plugins: [
    allow you to do anything else you want to do. import at top, and call the function in the array.
  ]
}

http://webpack.js.org   concepts page. will teach you the stuff.

*/
