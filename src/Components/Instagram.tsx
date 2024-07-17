import React from 'react';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';


const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: '40px',
    gap: '40px',
  };

  
const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px; 
  max-width: 1200px;
`;

const projects = [
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 1',
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 2',
   
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 3',
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 4',
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 5',
  },{
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 6',
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 7',
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Person 8',
  }
];

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc; 
  margin: 20px 0;
`;


const AboutUs: React.FC = () => (
  <PhotoContainer>
    <div style={rowStyle}>
      <h3 style={{paddingLeft: '16px', color: 'orange'}}>SEE WHAT'S HAPPEN ON INSTAGRAM</h3>
      
    </div>
    {projects.map((project, index) => (
      <PhotoCard
        key={index}
        src={project.src}
        alt={project.alt}
      />
    ))}
    <Divider />
  </PhotoContainer>
  
);

export default AboutUs;
