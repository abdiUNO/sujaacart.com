import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.2, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing
    }
  }
};

let cache = {};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.2, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
      ease: easing
    }
  }
};

const PostInfo = ({ post }) => {
  return (
    <div className="post-info">
      <time>{post.date}</time>
      <style jsx>{`
        .post-info {
          font-size: 16px;
          color: #999;
          margin: 10px auto;
        }
        .author {
          color: #555;
        }
        .avatar {
          float: left;
          width: 25px;
          height: 25px;
          margin: 0 10px 10px 0;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

const Post = ({ post }) => {
  const ref = useRef(null);

  return (
    <div className="container post " ref={ref}>
      <Head>
        <title>{`Post ${post.id}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={textVariants}>
          <div className="row nav-controls">
            {post.id > 1 ? (
              <Link href="/posts/[post]" as={`/posts/${post.id - 1}`} passHref>
                <a>
                  <span className="meta-nav mr-3">←</span>
                  Previous
                </a>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/posts/[post]" as={`/posts/${post.id + 1}`}>
              <a>
                Next
                <span className="meta-nav ml-3">→</span>
              </a>
            </Link>
          </div>
        </motion.div>

        <motion.img
          variants={imageVariants}
          src={`/img/comic_0${post.id}.jpg`}
        />

        <motion.div variants={textVariants}>
          <PostInfo post={post} />
        </motion.div>

        <div style={{ marginTop: 15 }}>
          <motion.div variants={backVariants}>
            <Link href="/">
              <a className="nav-back">Back to list</a>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .post {
          max-width: 1000px;
          text-align: center;
          margin: 0 auto;
        }
        .post p {
        }

        img {
          min-height: 750px;
        }

        .nav-controls {
          display: flex;
          justify-content: space-between;
          font-size: 22px;
          color: #999;
          margin: 10px 10px 30px 10px;
          line-height: 2.2em;
        }
        .nav-controls a {
          text-decoration: none;
          text-align: center;
          color: #3498db;
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
  console.log(query);
  const post = {
    id: parseInt(query.post),
    date: 'November 19th, 2019',
    title: 'Test title'
  };

  console.log(`Fetched show: ${post}`);

  return { post };
};

export default Post;
