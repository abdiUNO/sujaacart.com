import React from 'react';
import PostList from '../components/PostList';
import Head from 'next/head';

const importBlogPosts = async () => {
  const posts = (context => {
    const keys = context.keys().reverse();
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
      return {
        id: slug,
        image: value.attributes.image,
        date: value.attributes.date
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
        <title>Sujaac Arts</title>

        <meta name="title" content="Sujaac Arts" key="title" />
        <meta
          property="description"
          key="description"
          content="Sujaac Arts is Somalia political cartoonist, browse and share posts by sujaac arts"
        />
        <meta
          property="og:image"
          content="https://sujaacart.com/img/website_preview.png"
        />
      </Head>

      <PostList posts={props.posts} />

      <style jsx>
        {`
          padding-left: 0px;
          padding-right: 0px;
        `}
      </style>
    </div>
  );
};

Index.getInitialProps = async () => {
  return await importBlogPosts();
};

export default Index;
