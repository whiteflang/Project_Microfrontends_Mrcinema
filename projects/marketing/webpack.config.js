const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'marketing',

  exposes: {
    './MoviesModule': './projects/marketing/src/app/movies/movies.module.ts',
    './CandyShopModule': './projects/marketing/src/app/candy-shop/candy-shop.module.ts',
    './FeaturedMoviesComponent': './projects/marketing/src/app/movies/components/featured-movies/featured-movies.component.ts',
    './MovieDetailsComponent': './projects/marketing/src/app/movies/components/movie-details/movie-details.component.ts',
    './MiscModule': './projects/marketing/src/app/misc/misc.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
