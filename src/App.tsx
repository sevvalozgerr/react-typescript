import React from 'react';
import './App.css';

import Navbar from './Components/NavBar'
import ParallaxSection from './Components/ParallaxSection'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SolarServices from './Components/SolarServices';


const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <ParallaxSection />
        <SolarServices />
      
      
      
    
    </ThemeProvider>
  );
}

export default App;


