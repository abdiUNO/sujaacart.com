// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from 'next/document';
// We wrap our scripts below in Fragment to avoid unnecessary mark up
import React from 'react';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Montserrat:400,500&display=swap"
            rel="stylesheet"
          />
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
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sujaac Arts" />
          <meta
            property="og:description"
            content="Sujaac Arts web comics illustration"
          />
          <meta
            property="og:image"
            content="https://sujaacart.com/img/website_preview.png"
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
          <meta property="og:type" content="blog" />
          <meta property="og:title" content="Sujaac Arts" />
          <meta property="og:url" content="https://sujaacart.com" />
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
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
