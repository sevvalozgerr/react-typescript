import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: '#ffffff',
  color: '#ffffff',
  borderWidth: '2px',
  fontSize: '1.2rem', 
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#ffffff', 
    color: 'black', 
    borderColor: '#ffffff',
    
  },
  marginTop: '20px'
}));

const ParallaxContent = styled(Box)(({ isSticky }: { isSticky: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: isSticky ? 'fixed' : 'absolute',
  top: isSticky ? '20px' : '50%',
  left: '50%',
  transform: isSticky ? 'translateX(-50%)' : 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
  zIndex: 1000, 
}));

const ParallaxSection: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 400); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Parallax
      bgImage="./Assets/solar.jpg" 
      strength={500} 
      bgImageStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    >
      <ParallaxContent isSticky={isSticky}>
        <Typography variant="h3" component="div">
        DESIGN – BUILD – INTEGRATE
        </Typography>
        <StyledButton variant="outlined">Contact</StyledButton>
      </ParallaxContent>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      />
    </Parallax>
  );
};

export default ParallaxSection;


   