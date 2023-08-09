import theme from '@/styles/theme';
import styled from 'styled-components';

export const ScoreWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${theme.colors.gray_100};
  border-radius: 8px;
`;

export const ScoreColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 80px;
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
  font-size: 12px;
  background-color: ${theme.colors.gray_200};
  color: ${theme.colors.gray_500};
  border-left: 2px solid ${theme.colors.gray_100};
  border-right: 2px solid ${theme.colors.gray_100};
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
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  color: ${theme.colors.gray_500};
`;
export const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  color: ${theme.colors.gray_500};
`;
