import React from 'react';
import {
  CheckCircular,
  ColorResultContainer,
  Duration,
  ErrorCircular,
  Rectangle
} from './styles';

type ColorResultProps = {
  type?: 'success' | 'error';
  color?: string;
  timezone?: string;
  errorLabel?: string;
  successLabel?: string;
};

const ColorResult: React.FC<ColorResultProps> = ({
  type = 'success',
  color,
  timezone = '0s',
  errorLabel = '',
  successLabel = ''
}) => {
  return (
    <>
      {type === 'success' && (
        <ColorResultContainer>
          <Rectangle color={color}>{color}</Rectangle>
          <CheckCircular />
          <Duration>{timezone}</Duration>
        </ColorResultContainer>
      )}
      {type === 'error' && (
        <ColorResultContainer>
          <div style={{ display: 'flex', flex: 1, gap: 8 }}>
            <Rectangle fz color="#90caf9">
              {errorLabel}
            </Rectangle>
            <Rectangle fz color="#0288d1">
              {successLabel}
            </Rectangle>
          </div>
          <ErrorCircular />
          <Duration>{timezone}</Duration>
        </ColorResultContainer>
      )}
    </>
  );
};

export default ColorResult;
