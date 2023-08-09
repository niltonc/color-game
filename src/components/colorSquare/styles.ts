import styled from 'styled-components';
import theme from '@/styles/theme';

interface SquareStyleProps {
  progress?: number;
  color?: string;
}

export const SquareContainer = styled.div<SquareStyleProps>`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.color};
  position: relative;
`;

export const ProgressBar = styled.div<SquareStyleProps>`
  width: ${(props) => props.progress}%;
  height: 5px;
  background-color: ${theme.colors.gray_200};
  position: absolute;
  top: 0;
  left: 0;
`;
