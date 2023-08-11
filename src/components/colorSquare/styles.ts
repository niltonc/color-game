import styled from 'styled-components';
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
  background-color: ${theme.colors.gray_100};
`;

export const Button = styled.button<SquareStyleProps>`
  gap: 2px;
  color: #fff;
  height: 50px;
  width: 200px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.color};
`;
export const ContainerStart = styled.div`
  gap: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: 20px;
  justify-content: center;
`;
