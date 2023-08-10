import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ColorResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding-block: 10px;
`;

export const Rectangle = styled.div<ColorResultStyleProps>`
  display: flex;
  width: 150px;
  height: 45px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color || `${theme.colors.light_cian}`};
  color: ${theme.colors.white};
  ${(props) =>
    props.fz &&
    css`
      font-size: 12px;
      width: 70px;
    `}
`;

export const CheckCircular = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1.5px solid ${theme.colors.gray_400};
  border-radius: 50%;
  margin: 0 10px;
  background-color: #77d353;

  &::after {
    content: '\u2713';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: ${theme.colors.gray_400};
  }
`;
export const ErrorCircular = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1.5px solid ${theme.colors.gray_400};
  border-radius: 50%;
  margin: 0 10px;
  background-color: #ff9494;
  &::after {
    content: 'x';
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: ${theme.colors.gray_400};
  }
`;

export const Duration = styled.div`
  font-size: 16px;
`;
