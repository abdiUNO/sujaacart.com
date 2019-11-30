import React from 'react';

import Nav from './nav';

const PostList = ({ children }) => (
  <div className="page-wrapper">
    <Nav />

    <div className="content-wrapper">{children}</div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :global(body) {
        margin: 0;
        font-size: 20px;
        height: 100%;
        width: 100%;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        font-family: 'Montserrat', sans-serif;
        text-rendering: optimizeLegibility;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }

      a {
        color: #1b789e;
        text-decoration: none;
      }

      a:hover {
        color: #166281;
      }

      img {
        max-width: 100%;
      }

      .content-wrapper {
        margin-top: 25px;
        padding: 40px 0;
        background-color: #ffffff;
      }
    `}</style>
  </div>
);

export default PostList;
