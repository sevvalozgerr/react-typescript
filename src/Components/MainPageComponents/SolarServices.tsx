import React from 'react';
import Card from '../Card';
import ContactInfo from '../MainPageComponents/ContactInfo';
import styled from 'styled-components';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'wrap',
  marginTop: '40px',
  paddingLeft: '200px',
  gap: '40px',
};

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc; 
  margin: 20px 0;
`;

const SolarServices: React.FC = () => (
  <div style={containerStyle}>
    <div style={rowStyle}>
      <h3 style={{paddingLeft: '16px',}}>Solar Services</h3>
      <h3 style={{ color: 'orange' , paddingLeft: '500px',}}>See All Solar Services...</h3>
    </div>
    
    <div style={rowStyle}>
      <Card 
        src="./Assets/solarparallax.jpeg" 
        alt="Solar Image 1" 
        title="ENGINEERING, PROCUREMENT AND CONSTRUCTION" 
        text="We streamline the complex process of solar electric integration and provide expertise at every project stage. From developing financing options to operating your system, SES will create a program that is custom-made for you." 
      />
      
      <Card 
        src="./Assets/solarparallax.jpeg" 
        alt="Solar Image 2" 
        title="OPERATIONS & MAINTENANCE" 
        text="The commitment SES has toward its customers lasts well beyond the commissioning of the solar electric system: Our comprehensive Operations and Maintenance (O&M) service department offers system monitoring, performance reporting, and 24-hour responsive service." 
      />
      
      <ContactInfo />
    </div>
    <Divider />
  </div>


);

export default SolarServices;
