// next.config.js
const fs = require('fs');
const posts = './content/posts';

const withCSS = require('@zeit/next-css');

const getPathsForPosts = () => {
  return fs
    .readdirSync(posts)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: '/blog/post/[slug]',
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
  exportPathMap: async function(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts()
    };
  }
});
