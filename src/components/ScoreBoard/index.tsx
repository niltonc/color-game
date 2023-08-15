import React from 'react';
import {
  ScoreColumn,
  ScoreItem,
  ScoreWrapper,
  Button,
  Title,
  Text,
  ButtonContainer
} from './styles';

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  score = 0,
  highScore = 0,
  time = 0,
  onReset,
  disabled = false
}) => {
  return (
    <ScoreWrapper>
      <ScoreColumn gap>
        <Title>REMANING TIME (s)</Title>
        <Text>{time}s</Text>
      </ScoreColumn>

      <ButtonContainer>
        <Button onClick={onReset} disabled={disabled}>
          RESTART
        </Button>
      </ButtonContainer>

      <ScoreColumn>
        <ScoreItem>
          <Title>HIGH SCORE</Title>
          <Text>{highScore}</Text>
        </ScoreItem>
        <ScoreItem binline>
          <Title>SCORE</Title>
          <Text>{score}</Text>
        </ScoreItem>
      </ScoreColumn>
    </ScoreWrapper>
  );
};

export default ScoreBoard;
