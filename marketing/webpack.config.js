const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {

  output: {
    publicPath: 'http://localhost:8081/',
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',

      exposes: {
        './MoviesModule': './src/app/movies/movies.module.ts',
      },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },

    })

  ]

} 



