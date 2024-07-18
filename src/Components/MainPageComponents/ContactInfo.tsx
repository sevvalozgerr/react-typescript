import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  bottom: 200px;
  padding-left: 40px;
  text-align: right;
`;

const ContactLink = styled.a`
  display: block;
  color: black;
  font-weight: bold;
  margin-top: 6px; 
  padding-right: 10px; 
`;

const ContactInfo: React.FC = () => {
  return (
    <Container>
      <h2 style={{color: 'orange'}}>Contact</h2>
      <ContactLink href="mailto:info@solaresystems.com"> info@solaresystems.com</ContactLink>
      <div>718.389.1545</div>
    </Container>
  );
};

export default ContactInfo;
