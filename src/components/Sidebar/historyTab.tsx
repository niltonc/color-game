import React from 'react';
import { ScoreContainer, TabContainer, Text, Title } from './styles';
import Button from '@/components/Button';
import Image from 'next/image';
import Right from '@/assets/Expand_right.svg';
import Left from '@/assets/Expand_left.svg';

interface HistoryTab {
  onClick?: () => void;
}

const HistoryTab = ({ onClick }: HistoryTab) => {
  return (
    <>
      <TabContainer>
        <Button variant="link" onClick={onClick}>
          <Image src={Left} width={20} height={20} alt="Left" />
        </Button>
        <Title>Current/Lastest Game</Title>
        <Button variant="link" onClick={onClick}>
          <Image src={Right} width={20} height={20} alt="Right" />
        </Button>
      </TabContainer>
      <ScoreContainer>
        <Text>Guessed Color</Text>
        <Text>Correct Color</Text>
        <Text>Score</Text>
      </ScoreContainer>
    </>
  );
};
export default HistoryTab;
