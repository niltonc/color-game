import React from 'react';
import {
  CheckCircular,
  ColorResultContainer,
  Container,
  Duration,
  ErrorCircular,
  Rectangle,
  RectangleContainer
} from './styles';

const ScoreHistory: React.FC<ScoreHistoryProps> = ({
  type = 'success',
  color = '',
  time = 0,
  errorLabel = '',
  successLabel = ''
}) => {
  return (
    <>
      {type === 'success' && (
        <ColorResultContainer>
          <Rectangle color={color}>{color}</Rectangle>
          <Container>
            <CheckCircular />
            <Duration>{time}s</Duration>
          </Container>
        </ColorResultContainer>
      )}
      {type === 'error' && (
        <ColorResultContainer>
          <RectangleContainer>
            <Rectangle variant="light" color="#90caf9">
              {errorLabel}
            </Rectangle>
            <Rectangle variant="dark" color="#0288d1">
              {successLabel}
            </Rectangle>
          </RectangleContainer>

          <Container>
            <ErrorCircular />
            <Duration>{time}s</Duration>
          </Container>
        </ColorResultContainer>
      )}
    </>
  );
};

export default ScoreHistory;
