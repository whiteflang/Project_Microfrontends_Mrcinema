// remote/webpack.config.js

module.exports = {
    entry: "./src/index",
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    target: "web",
  };