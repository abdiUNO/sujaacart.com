import 'bootstrap/dist/css/bootstrap.min.css';
import matter from 'gray-matter';

import React, { useEffect, Component } from 'react';
import PostList from '../components/PostList';
import Head from 'next/head';

import 'hamburgers/dist/hamburgers.min.css';

const BLOG_POSTS_PATH = '../content/posts';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  // const markdownFiles = require
  //   .context('../content/posts', false, /\.md$/)
  //   .keys()
  //   .map(relativePath => relativePath.substring(2));
  // return Promise.all(
  //   markdownFiles.map(async path => {
  //     const markdown = await import(`../content/posts/${path}`);
  //     return { ...markdown, slug: path.substring(0, path.length - 3) };
  //   })
  // );

  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys();
    console.log(keys);
    const values = keys.map(context);
    console.log(values);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      console.log(value, key, index, slug);
      return { ...value.attributes };
      return {
        id: value.attributes.slug,
        url: `/img/comic_0${value.attributes.slug}.jpg`
      };
      // const document = matter(value.default);
      // return {
      //   title,
      //   slug
      // };
    });
    return data;
  })(require.context('../content/posts', true, /\.md$/));

  return {
    posts: posts
  };
};

export default class Index extends Component {
  static async getInitialProps() {
    const posts = await importBlogPosts();

    return posts;
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="container">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PostList posts={this.props.posts || []} />
      </div>
    );
  }
}
