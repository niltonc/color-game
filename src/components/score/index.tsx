import React from 'react';
import {
  ScoreColumn,
  ScoreItem,
  ScoreWrapper,
  Button,
  Title,
  Text
} from './styles';

interface PointControler {
  score?: string;
  highScore?: string;
  time?: string;
  onReset?: () => void;
}
const PointControler: React.FC<PointControler> = ({
  score,
  highScore,
  time,
  onReset
}) => {
  return (
    <ScoreWrapper>
      <ScoreColumn style={{ gap: 5 }}>
        <Title>
          REAMING <br />
          TIME (s)
        </Title>
        <Text>{time ?? '0'}</Text>
      </ScoreColumn>
      <div>
        <Button onClick={onReset}>RESTART</Button>
      </div>
      <ScoreColumn>
        <ScoreItem>
          <Title style={{ marginLeft: 20 }}>
            HIGH <br />
            SCORE
          </Title>
          <Text style={{ marginRight: 20 }}>{highScore ?? '0'}</Text>
        </ScoreItem>
        <ScoreItem style={{ borderTop: '2px solid #ccc' }}>
          <Title style={{ marginLeft: 20 }}>SCORE</Title>
          <Text style={{ marginRight: 20 }}>{score ?? '0'}</Text>
        </ScoreItem>
      </ScoreColumn>
    </ScoreWrapper>
  );
};

export default PointControler;
