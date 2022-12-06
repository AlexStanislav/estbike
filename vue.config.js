const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/estbike/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Est Bike Adventure',
    },
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: "https://estbike.ro/", paths: [
          {
            path: '/',
          },
          {
            path: '/about',

          },
          {
            path: '/models',

          },
          {
            path: '/contact',

          },
          {
            path: '/rabla',

          },
          {
            path: '/service',

          },
          {
            path: '/model',

          },
        ]
      })
    ]
  },
}