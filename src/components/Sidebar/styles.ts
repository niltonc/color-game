import styled from 'styled-components';
import theme from '@/styles/theme';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  color: ${theme.colors.primary};
  box-shadow: ${theme.box.shadow};
  background-color: ${theme.colors.gray_50};
`;
export const ScoreContainer = styled.div`
  flex: 1;
  gap: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  padding-inline: 20px;
  justify-content: space-between;
  border-block: 2px solid ${theme.colors.border};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Text = styled.span`
  font-size: 15px;
`;
export const Title = styled.div`
  display: flex;
  font-weight: bold;
  width: 550px;
  font-size: 12px;
  justify-content: center;
`;
export const TabContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-block: 20px;
  padding-inline: 10px;
`;
