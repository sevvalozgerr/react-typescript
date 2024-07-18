import React from 'react';
import styled from 'styled-components';

interface ClickableTextProps {
  text: string;
  onClick: () => void;
}

const Text = styled.span`
  color: gray;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: darkblue;
  }
`;

const ClickableText: React.FC<ClickableTextProps> = ({ text, onClick }) => (
  <Text onClick={onClick}>{text}</Text>
);

export default ClickableText;
