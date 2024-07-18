import React from 'react';
import './App.css';

import Navbar from './Components/NavBar'
import ParallaxSection from './Components/MainPageComponents/ParallaxSection'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SolarServices from './Components/MainPageComponents/SolarServices';
import Projects from './Components/MainPageComponents/Projects';
import AboutUs from './Components/MainPageComponents/AboutUs';
import Instagram from './Components/MainPageComponents/Instagram';
import SecondParallax from './Components/MainPageComponents/SecondParallax'
import Brands from './Components/MainPageComponents/Brands';
import Dividers from './Components/Divider'
import Footer from './Components/Footer';
const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <ParallaxSection />
      <SolarServices />
      <Projects/>
      <Dividers/>
      <AboutUs/>
      <Dividers/>
      <Instagram/>
      <SecondParallax />
      <Brands/>
      <Dividers/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;


