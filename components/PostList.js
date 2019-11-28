import React from 'react';
import './comic.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.9,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

function PostList({ posts }) {
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <div className="row">
        <div className="gallery" id="gallery">
          {posts.length > 0 &&
            posts.map((_comic, index) => (
              <div
                key={_comic.id}
                className="mb-3 pics animation all 2 mx-3 py-2">
                <motion.div variants={postVariants}>
                  <Link href="/posts/[slug]" as={`/posts/${_comic.id}`}>
                    <a className="text-decoration-none">
                      <motion.div
                        whileHover="hover"
                        variants={{ hover: { scale: 0.96 } }}>
                        <img
                          className="img-fluid"
                          src={_comic.image}
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
  );
}

export default PostList;
