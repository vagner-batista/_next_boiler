import React, { useContext, useState } from 'react';
import { styled } from '@mui/system';
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

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Header() {
  const handleThemeCHange = (e) => {
    const newTheme = e.target.value;
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };
  const { state, dispatch } = useContext(Store);
  const { themeName } = state;
  const [selectTheme, setselectTheme] = useState('default');
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

            <Select value={themeName} onChange={handleThemeCHange}>
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
