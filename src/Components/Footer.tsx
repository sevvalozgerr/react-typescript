import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import ClickableText from './ClickableText';
import InstagramIcon from '@mui/icons-material/Instagram'; 


const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: '16px',
    textAlign: 'center',
    gap: '8px',
   justifyContent: 'center',
  zIndex: 1000,
  };

const Content = styled('div')({
    display: 'flex',
    alignItems: 'center',
   flexDirection: 'column',
   justifyContent: 'center',
  color: 'black',
  textAlign: 'center',
  zIndex: 1000,
  });

const Footer: React.FC = () => {
    const handleClick = () => {
        alert('Text clicked!');
      };
      return (
        <div>
          <Content>
        <Typography variant="h3" component="div">
            FAQ
        </Typography>
        <div style={rowStyle}>
        <ClickableText text="HOME" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="SERVICES" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="ABOUT" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="PROJECTS" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="CONTACTS" onClick={handleClick} />
       </div>

       <InstagramIcon />

       <div style={rowStyle}>
        <ClickableText text="Terms&Conditions" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="Info@us.com" onClick={handleClick} />
        <p>|</p>
        <ClickableText text="718.650.122" onClick={handleClick} />
        
       </div>
        
      </Content>
          
        </div>
      );
}


export default Footer;


   