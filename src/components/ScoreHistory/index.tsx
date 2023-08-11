import React from 'react';
import {
  CheckCircular,
  ColorResultContainer,
  Container,
  Duration,
  ErrorCircular,
  Rectangle
} from './styles';

const ScoreHistory: React.FC<ColorResultProps> = ({
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
          <div style={{ display: 'flex', flex: 1, gap: 8 }}>
            <Rectangle variant="light" color="#90caf9">
              {errorLabel}
            </Rectangle>
            <Rectangle variant="dark" color="#0288d1">
              {successLabel}
            </Rectangle>
          </div>
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
