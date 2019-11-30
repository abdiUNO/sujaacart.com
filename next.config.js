// next.config.js
const glob = require('fast-glob');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    });
    return configuration;
  },
  exportPathMap: async function(defaultPathMap) {
    const routes = {
      ...defaultPathMap
    };

    const blogs = await glob.sync('content/posts/**/*.md');

    const blogSlugs = blogs.map(file =>
      file
        .split('/')[2]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim()
    );

    blogSlugs.forEach((blogName, index) => {
      routes[`/posts/${blogName}`] = {
        page: '/posts/[slug]',
        query: {
          slug: blogName,
          next: blogSlugs[index + 1],
          prev: blogSlugs[index - 1]
        }
      };
    });

    console.log(routes);

    return routes;
  }
});
