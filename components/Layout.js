import Header from './Header';
import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import * as themes from '../styles/themes';
import { Container, CssBaseline } from '@mui/material';
import { Store } from '../utils/Store';
import Head from 'next/head';
import useThemes from '../styles/themes';

export default function LayersOutlined({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { themeName } = state;
  return (
    <div>
      <Head>
        <title>{title ? title : 'BoilerPlate'}</title>
        <meta
          name="description"
          content={description ? description : 'Feito aqui mesmo'}
        ></meta>
        <meta name="author" content="Vagner Rogerio Batista"></meta>
      </Head>
      <ThemeProvider theme={useThemes(themeName)}>
        <CssBaseline />
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
}
