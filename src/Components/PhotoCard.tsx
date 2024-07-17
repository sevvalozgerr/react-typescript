import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  overflow: hidden;
  margin: 24px;
  width: 250px;  
  height: 250px;  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ProjectCardProps {
  src: string;
  alt: string;
}

const PhotoCard: React.FC<ProjectCardProps> = ({ src, alt}) => (
  <Card>
    <Image src={src} alt={alt} />
  </Card>
);

export default PhotoCard;
