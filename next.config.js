// next.config.js
const glob = require('glob');

const fs = require('fs');
const posts = './content/posts';

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
  exportPathMap: async function() {
    const routes = {
      '/': { page: '/' }
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
    blogSlugs.map((blog, index) => {
      routes[`/posts/${blog}`] = {
        page: '/posts/[slug]',
        query: {
          slug: blog,
          next: blogSlugs[index + 1],
          prev: blogSlugs[index - 1]
        }
      };
    });

    return routes;
  }
});
