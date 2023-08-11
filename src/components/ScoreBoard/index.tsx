import React from 'react';
import {
  ScoreColumn,
  ScoreItem,
  ScoreWrapper,
  Button,
  Title,
  Text
} from './styles';

const ScoreBoard: React.FC<PointControler> = ({
  score = 0,
  highScore = 0,
  time = 0,
  onReset
}) => {
  return (
    <ScoreWrapper>
      <ScoreColumn style={{ gap: 5 }}>
        <Title>
          REMANING <br />
          TIME (s)
        </Title>
        <Text>{time}s</Text>
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
          <Text style={{ marginRight: 20 }}>{highScore}</Text>
        </ScoreItem>
        <ScoreItem binline>
          <Title style={{ marginLeft: 20 }}>SCORE</Title>
          <Text style={{ marginRight: 20 }}>{score}</Text>
        </ScoreItem>
      </ScoreColumn>
    </ScoreWrapper>
  );
};

export default ScoreBoard;
