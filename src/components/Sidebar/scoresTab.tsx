import React from 'react';
import { Div, ScoreContainer, TabContainer, Text, Title } from './styles';
import Button from '@/components/Button';
import Image from 'next/image';
import Right from '@/assets/Expand_right.svg';
import Left from '@/assets/Expand_left.svg';

interface HistoryTab {
  onClick?: () => void;
}
const ScoresTab = ({ onClick }: HistoryTab) => {
  return (
    <>
      <TabContainer>
        <Button variant="link" onClick={onClick}>
          <Image src={Left} width={20} height={20} alt="Left" />
        </Button>
        <Title>Players Score</Title>
        <Button variant="link" onClick={onClick}>
          <Image src={Right} width={20} height={20} alt="Right" />
        </Button>
      </TabContainer>
      <ScoreContainer>
        <Text>Name</Text>
        <Text>Score</Text>
      </ScoreContainer>
    </>
  );
};
export default ScoresTab;
