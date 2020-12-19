import React from 'react';
import NextApp from 'next/app';
import NextHead from 'next/head';
import { Global } from '@emotion/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import metadata from '@zd/config/metadata';
import globalStyles from '@zd/theme/styles';
import GoogleAnalytics from '@zd/components/services/GoogleAnalytics';

class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props;

    const pageUrl = `${metadata.website.url}${router.asPath}`;

    return (
      <>
        <NextHead>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />

          {/* Manifest */}
          <link rel="manifest" href={metadata.website.manifest} />

          {/* Icon */}
          <link rel="shortcut icon" href="/images/favicon/favicon.png" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/images/favicon/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/images/favicon/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/favicon/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/images/favicon/apple-touch-icon-76x76.png" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/images/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/images/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/images/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/images/favicon/apple-touch-icon-152x152.png"
          />
          <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-128x128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-196x196.png" sizes="196x196" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

          {/* Browser Theme */}
          <meta name="theme-color" content={metadata.website.themeColor} />
          <meta name="msapplication-TileColor" content={metadata.website.themeColor} />

          {/* SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content={metadata.website.keywords} />

          {/* Name */}
          <meta name="application-name" content={metadata.website.name} />
          <meta name="author" content={metadata.website.name} />
          <meta name="copyright" content={metadata.website.name} />
          <meta name="designer" content={metadata.website.name} />
          <meta name="owner" content={metadata.website.name} />
          <meta property="og:site_name" content={metadata.website.name} />

          {/* Twitter */}
          <meta name="twitter:site" content={`@${metadata.social.twitterUsername}`} />
          <meta name="twitter:creator" content={`@${metadata.social.twitterUsername}`} />

          {/* Page URL */}
          <meta name="url" content={pageUrl} />
          <meta property="og:url" content={pageUrl} />
          <link rel="canonical" href={pageUrl} />
          <link rel="shortlink" href={pageUrl} />

          {/* Pinterest */}
          <meta name="p:domain_verify" content={metadata.services.pinterestVerification} />

          {/* Miscellaneous */}
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </NextHead>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
        <GoogleAnalytics />
      </>
    );
  }
}

export default App;
