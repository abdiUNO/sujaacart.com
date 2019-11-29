import React from 'react';
import './comic.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const postVariants = {
  initial: { scale: 0.95, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const profileVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

function PostList({ posts }) {
  return (
    <div style={{ height: '100%' }}>
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={postVariants}>
          <div className="row">
            <div className="img-container mx-auto">
              <img src="/img/profile.png" alt="" className="img-fluid" />
            </div>
          </div>
        </motion.div>
        <div className="row">
          <div className="gallery" id="gallery">
            {posts.map((_comic, index) => (
              <div
                key={_comic.slug}
                id={_comic.slug}
                className="mb-3 pics animation all 2 mx-3 py-2">
                <motion.div variants={postVariants}>
                  <Link href={{ pathname: `/posts/${_comic.slug}` }}>
                    <a className="text-decoration-none">
                      <motion.div
                        whileHover="hover"
                        variants={{
                          hover: { scale: 0.96, bounceDamping: 8 }
                        }}>
                        <img
                          className="img-fluid"
                          src={`${_comic.image}?nf_resize=fit&w=400`}
                          alt="Card image cap"
                        />
                      </motion.div>
                      <p className="img-date">November 19th, 2019</p>
                    </a>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .img-container {
          max-width: 35%;
          display: flex;
          flex: 1;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 60px;
        }
      `}</style>
    </div>
  );
}

export default PostList;
