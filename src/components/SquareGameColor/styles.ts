import styled, { keyframes } from 'styled-components';
import theme from '@/styles/theme';

export const SquareContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  background-color: ${(props) => props.color};
`;

export const ProgressBar = styled.div<SquareStyleProps>`
  top: 0;
  left: 0;
  height: 5px;
  position: absolute;
  width: ${(props) => props.progress}%;
  background-color: ${theme.colors.gray_200};
`;

export const Button = styled.button<SquareStyleProps>`
  gap: 5px;
  border: none;
  display: flex;
  padding: 20px 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.xxxsmall};
  border-radius: ${theme.border.radius};
  background-color: ${(props) => props.color};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: rotate(-10deg) scale(1.1);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  :active {
    transform: rotate(0) scale(1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;
export const ContainerStart = styled.div`
  gap: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: 20px;
  justify-content: center;
`;
