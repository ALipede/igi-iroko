import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { SSRProvider } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import createEmotionCache from '../utility/createEmotionCache';
import '../styles/globals.scss';

import Layout from '@/components/layout/layout';

const clientSideEmotionCache = createEmotionCache();

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>igi iroko | Home</title>
        <meta
          property="og:title"
          content="igi iroko | multimedia"
          key="igi iroko | multimedia"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <SSRProvider>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SSRProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
