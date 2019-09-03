var path = require("path")
var dotenv = require("dotenv").config()
var devMode = process.env.NODE_ENV !== "production"
var HandlebarsPlugin = require("handlebars-webpack-plugin")

module.exports = {
  mode: devMode ? "development" : "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src/*.hbs"),
      output: path.join(process.cwd(), "dist", "index.html"),
      data: dotenv.parsed,
    }),
  ],
}
