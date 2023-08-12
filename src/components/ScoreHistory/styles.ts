import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ColorResultContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-block: 10px;
`;

export const Rectangle = styled.div<ColorResultStyleProps>`
  height: 45px;
  width: 148px;
  display: flex;
  font-size: 15px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.box.shadow};
  background-color: ${(props) => props.color};
  color: ${(props) => {
    const getLuminance = (hexColor: any) => {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    };

    const backgroundLuminance = getLuminance(props.color);

    return backgroundLuminance > 0.5
      ? `${theme.colors.primary}`
      : `${theme.colors.white}`;
  }};

  ${(props) =>
    props.variant === 'light' &&
    css`
      font-size: 12px;
      width: 70px;
      color: ${theme.colors.primary};
    `}
  ${(props) =>
    props.variant === 'dark' &&
    css`
      font-size: 12px;
      width: 70px;
      color: ${theme.colors.white};
    `}
`;

export const CheckCircular = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  background-color: ${theme.colors.success};
  border: 1.5px solid ${theme.colors.gray_400};

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
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  background-color: ${theme.colors.error};
  border: 1.5px solid ${theme.colors.gray_400};
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
  font-size: 15px;
  color: ${theme.colors.primary};
`;

export const Container = styled.div`
  flex: 1;
  gap: 5px;
  display: flex;
  padding-left: 8px;
  justify-content: flex-start;
`;
