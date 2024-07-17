import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectsCard';


const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: '40px',
    gap: '40px',
  };

  
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px; 
  max-width: 1200px;
`;

const projects = [
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Project 1',
    title: 'Project 1',
    text: 'Description of project 1. We streamline the complex process of solar electric integration and provide expertise at every project stage. From developing financing options to operating your system, SES will create a program that is custom-made for you.'
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Project 2',
    title: 'Project 2',
    text: 'Description of project 2.'
  },
  {
    src: "./Assets/solarparallax.jpeg",
    alt: 'Project 3',
    title: 'Project 3',
    text: 'Description of project 3.'
  }
];

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc; 
  margin: 20px 0;
`;


const Projects: React.FC = () => (
  <ProjectsContainer>
    <div style={rowStyle}>
      <h3 style={{paddingLeft: '16px', color: 'orange'}}>PROJECTS</h3>
      <h3 style={{ paddingLeft: '860px',}}>See All in Projects...</h3>
    </div>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        src={project.src}
        alt={project.alt}
        title={project.title}
        text={project.text}
      />
    ))}
    <Divider />
  </ProjectsContainer>
  
);

export default Projects;
