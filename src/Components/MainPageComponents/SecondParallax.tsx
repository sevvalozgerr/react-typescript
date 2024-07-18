import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { Box} from '@mui/material';



const SecondParallax: React.FC = () => {
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

export default SecondParallax;

   