import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface ColorSquareProps {
  color: string;
  progress: number;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ color, progress }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(progress);
  }, [progress]);

  return (
    <div>
      <S.SquareContainer color={color}>
        <S.ProgressBar progress={progressWidth} />
      </S.SquareContainer>
    </div>
  );
};

export default ColorSquare;
