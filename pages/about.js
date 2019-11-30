import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

class About extends Component {
  render() {
    return (
      <motion.div initial="visible" animate={'enter'} exit="exit">
        <Head>
          <title>About - Sujaac Arts</title>
          <meta name="title" content="About - Sujaac Arts" />
          <meta
            property="description"
            content="About on Sujaac Arts web comics illustration"
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
