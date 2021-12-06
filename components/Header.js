import React, { useContext, useEffect, useState } from 'react';
import { borderColor, styled } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Select,
  MenuItem,
} from '@mui/material';
import { Store } from '../utils/Store';
import { themeNamesList } from '../styles/themes';
import { purple } from '@mui/material/colors';
import emotionStyled from '@emotion/styled';
import Cookies from 'js-cookie';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Header() {
  const { state, dispatch } = useContext(Store);
  const { themeName } = state;
  const handleThemeCHange = (e) => {
    const newTheme = e.target.value;
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };

  useEffect(() => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: Cookies.get('themeName') || 'default',
    });
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography element="h5" variant="h5">
              Header
            </Typography>

            <Select
              value={themeName}
              onChange={handleThemeCHange}
              sx={{
                color: 'white',
                '&:before': { borderColor: 'white' },
                '&:after': { borderColor: 'white' },
              }}
            >
              {themeNamesList.map((n) => (
                <MenuItem key={n} value={n}>
                  {n}
                </MenuItem>
              ))}
            </Select>
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}
