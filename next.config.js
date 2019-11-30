// next.config.js
const glob = require('fast-glob');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const withPurgeCss = require('next-purgecss');

module.exports = withPlugins([[withCSS, withPurgeCss], [withOffline]], {
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    });
    return configuration;
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'google-fonts-stylesheets',
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      { urlPattern: /^https?.*/, handler: 'networkFirst' }
    ],
    // Not sure adding display swap is actually working (i see fetch for plain still after)
    // importScripts: ['static/js/service-worker-extras.js'],
    skipWaiting: true,
    clientsClaim: true
  },
  exportPathMap: async function() {
    const routes = {
      '/': { page: '/' },
      '/posts': { page: '/' },
      '/about': { page: '/about' }
    };
    //get all .md files in the posts dir
    const blogs = glob.sync('content/posts/**/*.md');

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file =>
      file
        .split('/')[2]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim()
    );

    //add each blog to the routes obj
    blogSlugs.reverse().map((blog, index) => {
      routes[`/posts/${blog}`] = {
        page: '/posts/[slug]',
        query: {
          uuid: blog,
          next: blogSlugs[index + 1],
          prev: blogSlugs[index - 1]
        }
      };
    });

    return routes;
  }
});
