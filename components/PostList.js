import React from 'react';
import './comic.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-component';
import {
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const masonryOptions = {
  transitionDuration: 0,
  horizontalOrder: true,
  itemSelector: '.pics'
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

const postVariants = {
  initial: { scale: 0.95, y: -15, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const placeholder = (
  <div className="photo-placeholder">
    <style jsx>{`
      .photo-placeholder {
        height: 300px;
        width: 100vw;
      }
    `}</style>
  </div>
);

const Gallery = ({ posts, scrollPosition }) => (
  <div>
    {posts.map((_comic, index) => (
      <div
        key={_comic.id}
        id={index}
        className="mb-3 pics animation col-md-4 col-sm-6 col-xs-12">
        <motion.div variants={postVariants}>
          <Link prefetch={false} href={`/posts/${_comic.id}`}>
            <a className="text-decoration-none">
              <motion.div
                whileHover="hover"
                variants={{
                  hover: { scale: 0.96, bounceDamping: 8 }
                }}>
                <LazyLoadImage
                  className="img-fluid"
                  alt={`Post ${_comic.date}`}
                  scrollPosition={scrollPosition}
                  effect="blur"
                  width={'100%'}
                  placeholder={placeholder}
                  height={'auto'}
                  src={`${_comic.image}?nf_resize=fit&w=400`} // use normal <img> attributes as props
                />
                <p className="img-date">November 19th, 2019</p>
              </motion.div>
            </a>
          </Link>
        </motion.div>
      </div>
    ))}
  </div>
);

const GalleryWithScroll = trackWindowScroll(Gallery);

function PostList({ posts, scrollPosition }) {
  return (
    <div style={{ height: '100%' }}>
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={postVariants}>
          <div className="row embed-responsive">
            <div className="img-container mx-auto">
              <img
                src="/img/profile.png?nf_resize=fit&w=400"
                alt=""
                className="img-fluid"
                loading="auto"
              />
            </div>
          </div>
        </motion.div>
        <Masonry
          className={'gallery'} // default ''
          options={masonryOptions} // default {}
          enableResizableChildren={true}>
          <GalleryWithScroll posts={posts} />
        </Masonry>
      </motion.div>
      <style jsx>{`
        .img-container {
          max-width: 35%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-bottom: 60px;
        }
      `}</style>
    </div>
  );
}

export default PostList;
