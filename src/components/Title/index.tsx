import { getColor } from '@/utils/getColor';
import React from 'react';
import { ColorfulText } from './styles';

const Title = () => {
  const text = ' COLOR';
  return (
    <ColorfulText>
      GUESS THE
      {text.split('').map((char, index) => (
        <span key={index} style={{ color: getColor(index) }}>
          {char}
        </span>
      ))}
    </ColorfulText>
  );
};

export default Title;
