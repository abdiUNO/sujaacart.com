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
