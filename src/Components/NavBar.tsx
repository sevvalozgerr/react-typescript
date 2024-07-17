import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InstagramIcon from '@mui/icons-material/Instagram'; 
import BoltIcon from '@mui/icons-material/Bolt';

const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
    },
  });
const ToolbarWrapper = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavLinks = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginLeft: 'auto', 
  });

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
});

const Navbar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <ToolbarWrapper>
          <Logo>
          <IconButton
              edge="end"
              color="inherit"
              aria-label="energy"
              href="#"
            >
              <BoltIcon />
            </IconButton>
            <Typography variant="h6">Solar Energy</Typography>
          </Logo>
          <NavLinks>
            <Button color="inherit">Services</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contacts</Button>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
          </NavLinks>
          
        </ToolbarWrapper>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
