import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

const buttonVariants = {
  exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
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
      delay: 0.3,
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
        <title>{`Post | ${reformatDate(post.date)} by Sujaac Arts`}</title>
        <meta name="title" content="Comic by Sujaac Arts" />
        <meta
          property="description"
          content={`Post ${reformatDate(post.date)} by Sujaac Arts`}
        />
      </Head>
      <motion.div
        initial="exit"
        animate="enter"
        positionTransition={spring}
        exit="exit">
        <motion.div variants={buttonVariants}>
          <div className="row nav-controls justify-content-around">
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

        <motion.img
          variants={imageVariants}
          src={`${post.image}`}
          alt={`Post ${post.date}`}
          loading="auto"
        />

        <motion.div variants={textVariants}>
          <PostInfo post={post} />
          <p>{post.text}</p>
        </motion.div>

        <div id="fb-root">
          <div
            className="fb-share-button"
            data-href={`https://sujaacart.com/posts/${post.id}`}
            data-layout="button_count"></div>
        </div>

        <motion.div variants={backVariants}>
          <Link href={`/#${post.id}`} passHref={true} scroll>
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
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          font-size: 22px;
          color: #999;
          margin-top: 10px;
          margin-bottom: 30px;
          line-height: 2.2em;
        }
        .nav-controls a {
          text-decoration: none;
          text-align: center;
          color: #3498db;
          font-weight: 500;
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `
        }}
      />
    </div>
  );
}

Post.getInitialProps = async function(ctx) {
  const { uuid, next, prev } = ctx.query;
  const value = await import(`../../content/posts/${uuid}.md`);
  return {
    post: {
      id: uuid,
      image: value.attributes.image,
      date: value.attributes.date,
      text: value.attributes.text,
      next,
      prev
    }
  };
};
