import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ColorSquare: React.FC<ColorSquareProps> = ({ color, progress }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(progress);
  }, [progress]);

  return (
    <div>
      <S.SquareContainer color={color}>
        <S.ProgressBar progress={progressWidth} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: 'red'
          }}
        >
          <button>easy</button>
          <button>midium</button>
          <button>hard</button>
        </div>
      </S.SquareContainer>
    </div>
  );
};

export default ColorSquare;
