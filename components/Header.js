import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Header() {
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
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}
