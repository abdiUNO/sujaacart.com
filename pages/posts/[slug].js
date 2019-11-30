import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

let cache = {};

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

const PostInfo = ({ post }) => {
  return (
    <div className="post-info">
      <time>{reformatDate(post.date)}</time>
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

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100
};

export default function Post(props) {
  const { post } = props;

  return (
    <div className="container post" style={{ height: '100vh' }}>
      <Head>
        <title>{`Post | ${reformatDate(post.date)}`}</title>
      </Head>
      <motion.div
        initial="exit"
        animate="enter"
        positionTransition={spring}
        exit="exit">
        <motion.div variants={textVariants}>
          <div className="row nav-controls">
            {props.post.prev ? (
              <Link
                passHref={true}
                href={{ pathname: `/posts/${props.post.prev}` }}>
                <a>
                  <span className="meta-nav mr-3">←</span>
                  Previous
                </a>
              </Link>
            ) : (
              <div />
            )}

            {props.post.next ? (
              <Link
                passHref={true}
                shallow={true}
                href={{ pathname: `/posts/${props.post.next}` }}>
                <a>
                  Next
                  <span className="meta-nav ml-3">→</span>
                </a>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>

        <motion.img variants={imageVariants} src={`${post.image}`} />

        <motion.div variants={textVariants}>
          <PostInfo post={post} />
          <p>{post.text}</p>
        </motion.div>

        <motion.div variants={backVariants}>
          <Link href={`/`} passHref={true}>
            <a className="nav-back">Back to list</a>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .post {
          max-width: 1750px;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 250px;
        }
        .post p {
          margin: 40px 0;
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
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

Post.getInitialProps = async function(ctx) {
  const { slug, next, prev } = ctx.query;
  const value = await import(`../../content/posts/${slug}.md`);
  return {
    post: {
      id: slug,
      image: value.attributes.image,
      date: value.attributes.date,
      text: value.attributes.text,
      next,
      prev
    }
  };
};
