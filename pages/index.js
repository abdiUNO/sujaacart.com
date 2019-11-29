import React from 'react';
import PostList from '../components/PostList';
import Head from 'next/head';
import matter from 'gray-matter';

const importBlogPosts = async () => {
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    return keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const post = matter(value.default);

      return {
        ...post.data,
        id: post.data.uuid,
        slug
      };
    });
  })(require.context('../content/posts', true, /\.md$/));

  return {
    posts: posts
  };
};

const Index = props => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <PostList posts={props.posts} />
    </div>
  );
};

Index.getInitialProps = async () => {
  return await importBlogPosts();
};

export default Index;
