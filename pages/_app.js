import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

initRouterListeners();

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
