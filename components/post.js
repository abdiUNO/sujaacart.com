import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useRef } from 'react';
import PostList from '../components/comic';
import PostList from '../components/Layout';
import Link from 'next/link';

const scrollToRef = ref => {
  console.log(ref);
  if (window !== undefined && window !== null && ref.current !== null)
    window.scrollTo(0, ref.current.offsetTop);
};

const Post = props => {
  const myRef = useRef(null);

  const _comic = props.post;

  return (
    <PostList>
      <div
        ref={myRef}
        id="content"
        className="container-fluid"
        style={{ maxWidth: 1400, height: '100vh', paddingTop: 240 }}>
        <div
          key={_comic.id}
          className="mb-3 pics animation all 2 mx-3 py-2 d-flex flex-column align-items-center justify-content-center">
          <img
            className="img-fluid"
            src={`/img/comic_0${_comic.id}.jpg`}
            alt="Card image cap"
          />
          <p className="img-date">November 19th, 2019</p>
        </div>
      </div>
    </PostList>
  );
};

Post.getInitialProps = async function(context) {
  const post = { id: context.query.index, date: 'November 19th, 2019' };

  console.log(`Fetched show: ${post}`);

  return { post };
};

export default Post;
