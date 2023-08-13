import React from 'react';
import { ScoreContainer, TabContainer, Title } from './styles';
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: 20
          }}
        >
          <div style={{ width: 100 }}>Name</div>
          <div>Score</div>
        </div>
      </ScoreContainer>
    </>
  );
};
export default ScoresTab;
