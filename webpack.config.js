// webpack.config.js
const path = require('path')

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    chunkFilename: "[chunkhash:6].js",
    webassemblyModuleFilename: "[modulehash:6].wasm",
  },
  resolve: {
    extensions: [".ts", ".js", ".wasm"],
  },
  mode: "development",
}
