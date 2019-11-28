import React from 'react';
import './comic.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BLOG_POSTS_PATH = '../../content/posts';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context(BLOG_POSTS_PATH, false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`${BLOG_POSTS_PATH}/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

let comics = [];

for (var i = 0; i < 15; i++) {
  let index = i + 1;

  comics.push({ id: index, url: `/img/comic_0${index}.jpg` });
}

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

const PostList = ({ postsList }) => {
  console.log(postsList);
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <div className="row">
        <div className="gallery" id="gallery">
          {comics.map((_comic, index) => (
            <div
              key={_comic.id}
              className="mb-3 pics animation all 2 mx-3 py-2">
              <motion.div variants={postVariants}>
                <Link href="/posts/[post]" as={`/posts/${_comic.id}`}>
                  <a className="text-decoration-none">
                    <motion.div
                      whileHover="hover"
                      variants={{ hover: { scale: 0.96 } }}>
                      <img
                        className="img-fluid"
                        src={`/img/comic_0${_comic.id}.jpg`}
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
};

PostList.getInitialProps = async () => {
  const postsList = await importBlogPosts();

  return { postsList };
};

export default PostList;
