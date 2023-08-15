import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: ${theme.border.radius};
  border: 2px solid ${theme.colors.border};
  background-color: ${theme.colors.gray_50};
  box-shadow: ${theme.box.shadow};
`;
export const ScoreColumn = styled.div<ScoreStyleProps>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.gap &&
    css`
      gap: 10px;
    `}
`;
export const ScoreItem = styled.div<ScoreBoardStyleProps>`
  flex: 1;
  width: 100%;
  display: flex;
  padding-block: 2px;
  align-items: center;
  padding-inline: 20px;
  justify-content: space-between;
  ${(props) =>
    props.binline &&
    css`
      border-top: 2px solid ${theme.colors.border};
    `}
`;
export const ButtonContainer = styled.div``;
export const Button = styled.button<ScoreStyleProps>`
  height: 100%;
  border: none;
  font-size: ${theme.font.sizes.xxxxsmall};
  background-color: ${theme.colors.gray_200};
  color: ${theme.colors.primary};
  border-inline: 2px solid ${theme.colors.border};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray_400};
    color: ${theme.colors.gray_100};
  }
  &:active {
    transform: translate3d(0, 0.3px, 0);
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${theme.colors.gray_200};
      color: ${theme.colors.gray_400};
    }
    &:active {
      transform: translate3d(0, 0px, 0);
    }
  }
`;
export const Title = styled.span`
  font-size: ${theme.font.sizes.xxxxsmall};
  font-weight: bold;
  color: ${theme.colors.gray_500};
`;
export const Text = styled.span`
  font-size: ${theme.font.sizes.xxsmall};
  font-weight: bold;
  font-style: normal;
  color: ${theme.colors.gray_500};
`;
