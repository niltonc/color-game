import theme from '@/styles/theme';
import styled from 'styled-components';

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: ${theme.border.radius};
  border: 2px solid ${theme.colors.border};
  background-color: ${theme.colors.gray_50};
  box-shadow: ${theme.box.shadow};
`;
export const ScoreColumn = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ScoreItem = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  padding-block: 2px;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
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
