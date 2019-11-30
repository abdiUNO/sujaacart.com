import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';
import { TypographyStyle } from 'react-typography';
import typography from '../utils/typography';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Head>
          <TypographyStyle typography={typography} />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

export default MyApp;
