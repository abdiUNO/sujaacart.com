// next.config.js
const glob = require('glob');

const fs = require('fs');
const posts = './content/posts';

const withCSS = require('@zeit/next-css');

const getPathsForPosts = () => {
  return fs
    .readdirSync(posts)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/posts/${trimmedName}`]: {
          page: '/posts/[slug]',
          query: {
            slug: trimmedName
          }
        }
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = withCSS({
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    });
    return configuration;
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
    blogSlugs.forEach(blog => {
      routes[`/posts/${blog}`] = {
        page: '/posts/[slug]',
        query: { slug: blog }
      };
    });

    return routes;
  }
});
