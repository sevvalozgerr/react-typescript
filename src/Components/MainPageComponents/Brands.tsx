import React from 'react';
import styled from 'styled-components';
import PhotoCard from '../PhotoCard';

  
const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px; 
  max-width: 1200px;
`;

const projects = [
  {
    src: "./Assets/solarenergylogos.png",
    alt: 'Person 1',
  },
  {
    src: "./Assets/solarenergylogos.png",
    alt: 'Person 2',
   
  },
  {
    src: "./Assets/solarenergylogos.png",
    alt: 'Person 3',
  },
  {
    src: "./Assets/solarenergylogos.png",
    alt: 'Person 4',
  }
];

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc; 
  margin: 20px 0;
`;


const Brands: React.FC = () => (
  <PhotoContainer>
    <Divider />
    
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

export default Brands;
