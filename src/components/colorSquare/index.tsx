import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Image from 'next/image';
import Skull from '@/assets/skull.svg';
import Crown from '@/assets/crown-alt.svg';
import Heart from '@/assets/heart-half-vertical.svg';

const ColorSquare: React.FC<ColorSquareProps> = ({
  color,
  progress,
  onEasyMode,
  onMediumMode,
  onHardMode
}) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(progress);
  }, [progress]);

  return (
    <div>
      <S.SquareContainer color={color}>
        <S.ProgressBar progress={progressWidth} />
        <S.ContainerStart>
          <S.Button color="green" onClick={onEasyMode}>
            <Image src={Heart} width={20} height={20} alt="" />
            EASY
          </S.Button>
          <S.Button color="orange" onClick={onMediumMode}>
            <Image src={Crown} width={20} height={20} alt="" />
            MEDIUM
          </S.Button>
          <S.Button color="red" onClick={onHardMode}>
            <Image src={Skull} width={20} height={20} alt="" />
            HARD
          </S.Button>
        </S.ContainerStart>
      </S.SquareContainer>
    </div>
  );
};

export default ColorSquare;
