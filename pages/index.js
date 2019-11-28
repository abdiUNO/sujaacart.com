import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import Head from 'next/head';

import 'hamburgers/dist/hamburgers.min.css';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList />
    </div>
  );
};

export default Home;
