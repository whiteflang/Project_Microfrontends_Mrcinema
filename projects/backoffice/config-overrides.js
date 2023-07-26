
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("./package.json");

const path = require("path");

module.exports = function override(config, env) {
  config.mode = 'development' 
  config.output = {
    publicPath: process.env.REACT_APP_URL,
  }
  config.devServer = {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: process.env.REACT_APP_PORT,
  }
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "backoffice",
      filename: "remoteEntry.js",
      exposes: {
        "./dashboard/App": "./src/AppWebComponent",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  )
  return config;
}
