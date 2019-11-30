import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  horizontalOrder: true,
  itemSelector: '.pics'
};

const postVariants = {
  initial: { scale: 0.95, y: 0, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

function PostList({ posts }) {
  const childElements = posts.map((_comic, index) => (
    <div
      key={_comic.id}
      id={_comic.id}
      className="mb-3 pics animation col-md-4 col-sm-6 col-xs-12">
      <motion.div variants={postVariants}>
        <motion.div
          whileHover="hover"
          variants={{
            hover: { scale: 0.96, bounceDamping: 8 }
          }}>
          <Link href={`/posts/${_comic.id}`}>
            <a className="text-decoration-none">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={`${_comic.image}?nf_resize=fit&w=275`}
                />
                <source
                  media="(min-width: 641px)"
                  srcSet={`${_comic.image}?nf_resize=fit&w=375`}
                />
                <img
                  className="img-fluid"
                  src={`${_comic.image}?nf_resize=fit&w=375`}
                  alt={`Post ${_comic.date}`}
                />
              </picture>
            </a>
          </Link>
          <p className="img-date">November 19th, 2019</p>
        </motion.div>
      </motion.div>
      <style jsx>
        {`
          .pics {
            min-height: 200px;
            -webkit-transition: all 350ms ease;
            -o-transition: all 350ms ease;
            transition: all 350ms ease;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }

          img {
            -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
            border-radius: 3px;
            -webkit-transition: -webkit-box-shadow 1s;
            transition: -webkit-box-shadow 1s;
            -o-transition: box-shadow 1s;
            transition: box-shadow 1s;
            transition: box-shadow 1s, -webkit-box-shadow 1s;
            cursor: zoom-in;
          }
          .animation {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
          }
          .img-date {
            font-size: 0.8em;
            color: #939393;
            font-style: normal;
            display: block;
            margin-top: 0.5em;
          }
        `}
      </style>
    </div>
  ));

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <motion.div variants={postVariants}>
        <div className="row embed-responsive">
          <div className="img-container mx-auto">
            <img
              src="/img/profile.png?nf_resize=fit&w=375"
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
        {childElements}
      </Masonry>
      <style jsx>{`
        .gallery {
          min-height: 100vh;
          width: 100%;
        }

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
    </motion.div>
  );
}

export default PostList;
