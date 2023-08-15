import styled from 'styled-components';
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
  flex: 1;
  gap: 10px;
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc6;
  justify-content: space-between;
`;
export const Span = styled.div`
  width: 100%;
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${theme.colors.primary};
`;
export const ContainerReset = styled.div`
  right: 10px;
  bottom: 10px;
  position: absolute;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HistoryContainer = styled.div`
  padding-inline: 20px;
`;

export const Body = styled.body`
  margin: 0;
`;
