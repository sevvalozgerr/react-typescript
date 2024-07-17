import React from 'react';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #ffffff',
 
  overflow: 'hidden',
  margin: '20px',
  maxWidth: '400px',
  textAlign: 'center'
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto'
};

const contentStyle: React.CSSProperties = {
  padding: '16px'
};

const Card: React.FC<CardProps> = ({ src, alt, title, text }) => (
  <div style={cardStyle}>
    <img src={src} alt={alt} style={imageStyle} />
    <div style={contentStyle}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
