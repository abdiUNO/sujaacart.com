import React, { Component } from 'react';
import Head from 'next/head';
import Index from './index';
import { motion } from 'framer-motion';

class About extends Component {
  render() {
    return (
      <motion.div initial="visible" animate={'enter'} exit="exit">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://sujaacart.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sujaac Art" />
          <meta property="og:description" content="Web Comics" />
          <meta
            property="og:image"
            content="https://sujaacart.com/img/website_preview.png"
          />
        </Head>
        <div className="container">
          <div className="img-container">
            <img src="/img/profile.png" alt="" />
          </div>
        </div>
        <style jsx global>{`
          .img-container {
            max-width: 45%;
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          .img-container {
            text-align: center;
            margin: 0 auto;
          }
        `}</style>
      </motion.div>
    );
  }
}

About.getInitialProps = () => {
  return {};
};

export default About;
