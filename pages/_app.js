import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import createEmotionCache from '../utility/createEmotionCache';
import '../styles/globals.css';

import Layout from '@/components/layout/layout';

const clientSideEmotionCache = createEmotionCache();

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {/* <CssBaseline /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
