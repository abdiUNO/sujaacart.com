// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from 'next/document';
// We wrap our scripts below in Fragment to avoid unnecessary mark up
import React from 'react';

const dnsPrefetch = [
  '//fonts.googleapis.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com'
];

/*
By initiating early "preconnects", the browser can set up the necessary sockets ahead of time and eliminate the costly DNS,
TCP, and TLS roundtrips from the critical path of the actual request.
 */
const preConnect = [
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com'
];

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
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
          {dnsPrefetch.map(name => (
            <link rel="dns-prefetch" href={name} key={name} />
          ))}

          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="manifest" href="/manifest.json" />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          {/* Removing user-scalable=no, maximum-scale due to accessibility notes in lighthouse */}
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width, height=device-height, minimal-ui"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sujaac Arts" />
          <meta property="fb:app_id" content="106123752757013" />
          <meta
            property="og:description"
            content="Sujaac Arts web comics illustration"
          />

          <meta
            name="description"
            content="Sujaac Arts is Somalia political cartoonist, browse and share posts by sujaac arts"
          />
          <meta name="author" content="Abdullahi Mahamed" />
          <link rel="base" href="https://www.sujaacart.com" />
          <link rel="canonical" href="https://sujaacart.com" />
          <meta
            rel="sitemap"
            type="application/xml"
            content="https://sujaacart.com/sitemap.xml"
          />

          {preConnect.map(name => (
            <link
              href={name}
              rel="preconnect"
              crossOrigin="anonymous"
              key={name}
            />
          ))}

          <meta name="theme-color" content="#3798dc" />
          <meta name="msapplication-navbutton-color" content="#3798dc" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#3798dc"
          />
          <meta itemProp="name" content="Sujaac Arts" />
          <meta
            itemProp="description"
            content="Sujaac Arts is Somalia political cartoonist, browse and share posts by sujaac arts"
          />
          <meta
            itemProp="image"
            content="https://sujaacart.com/img/website_preview.png"
          />
          <meta type="og:type" property="og:type" content="blog" />
          <meta property="og:title" content="Sujaac Arts" />
          <meta
            key="og:url"
            property="og:url"
            content="https://sujaacart.com"
          />
          <meta
            property="og:site_name"
            content="https://www.facebook.com/pages/category/Personal-Blog/Sujaac-Arts-119424006122869/"
          />
          <meta
            property="og:image"
            content="https://sujaacart.com/img/website_preview.png"
          />
          <meta
            property="og:description"
            content="Sujaac Arts is Somalia political cartoonist, browse and share posts by sujaac arts"
          />
          <meta property="og:locale" content="" />
          <meta property="fb:app_id" content="119424006122869" />
          <meta property="fb:admins" content="" />
          <meta name="twitter:card" content="Gallery" />
          <meta name="twitter:title" content="Sujaac Arts" />
          <meta
            name="twitter:description"
            content="Sujaac Arts is Somalia political cartoonist, browse and share posts by sujaac arts"
          />
          <meta name="twitter:creator" content="Sujaac" />
          <meta
            name="twitter:image"
            content="https://sujaacart.com/img/website_preview.png"
          />
        </Head>
        <body>
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=106123752757013"></script>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
