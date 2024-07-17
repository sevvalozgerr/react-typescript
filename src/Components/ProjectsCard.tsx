import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  overflow: hidden;
  margin: 20px;
  width: 360px; 
  heigth: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Content = styled.div`
`;

const Title = styled.h2`
  font-size: 1.5em;
 
`;

const Text = styled.p`
  font-size: 1em;
  color: #555;
`;

interface ProjectCardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const ProjectsCard: React.FC<ProjectCardProps> = ({ src, alt, title, text }) => (
  <Card>
    <Image src={src} alt={alt} />
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Card>
);

export default ProjectsCard;
