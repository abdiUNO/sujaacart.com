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
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:url" content="https://sujaacart.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sujaac Art" />
          <meta property="og:description" content="Web Comics" />
          <meta
            property="og:image"
            content="https://sujaacart.com/img/website_preview.png"
          />
          <TypographyStyle typography={typography} />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

//initRouterListeners();

function initRouterListeners() {
  console.log('Init router listeners');

  const routes = [];

  Router.events.on('routeChangeStart', url => {
    pushCurrentRouteInfo();
  });

  Router.events.on('routeChangeComplete', url => {
    fixScrollPosition();
  });

  // Hack to set scrollTop because of this issue:
  // - https://github.com/zeit/next.js/issues/1309
  // - https://github.com/zeit/next.js/issues/3303

  function pushCurrentRouteInfo() {
    console.log('PUSHING');
    routes.push({ pathname: Router.pathname, scrollY: window.scrollY });
  }

  // TODO: We guess we're going back, but there must be a better way
  // https://github.com/zeit/next.js/issues/1309#issuecomment-435057091
  function isBack() {
    console.log('PUSHING');

    return (
      routes.length >= 2 &&
      Router.pathname === routes[routes.length - 2].pathname
    );
  }

  function fixScrollPosition() {
    let scrollY = 0;

    if (isBack()) {
      routes.pop(); // route where we come from
      const targetRoute = routes.pop(); // route where we return
      scrollY = targetRoute.scrollY; // scrollY we had before
    }

    console.log('Scrolling to', scrollY);
    window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
    console.log('routes now:', routes);
  }
}

export default MyApp;
