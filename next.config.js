// next.config.js
const glob = require('fast-glob');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [withCSS],
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
        optimizeImages: true,
        imagesFolder: 'img',
        optimizeImagesInDev: true,
        mozjpeg: {},
        optipng: {},
        webp: {}
      }
    ]
  ],
  {
    webpack: configuration => {
      configuration.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      });
      return configuration;
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
  }
);
