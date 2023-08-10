import theme from '@/styles/theme';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ScoreContainer = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  border-top: 2px solid ${theme.colors.gray_100};
`;
