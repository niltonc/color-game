import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`;

export const PlayerScoreContainer = styled.div`
  gap: 10px;
  padding: 5px 20px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  border-bottom: 1px solid #ccc6;
`;
export const Span = styled.div`
  color: ${theme.colors.primary};
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;