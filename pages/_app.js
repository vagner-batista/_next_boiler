import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import '../styles/global.css';
import { StoreProvider } from '../utils/Store';

import Header from '../components/Header';

const clientSideEmotionChache = createEmotionCache();

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionChache,
    pageProps,
  } = props;

  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1,width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CacheProvider>
    </StoreProvider>
  );
}
