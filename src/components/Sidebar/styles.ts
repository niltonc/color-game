import styled from 'styled-components';
import theme from '@/styles/theme';

export const SidebarContainer = styled.div`
  width: 250px;
  color: ${theme.colors.primary};
  box-shadow: ${theme.box.shadow};
  background-color: ${theme.colors.gray_50};
`;
export const ScoreContainer = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  padding-inline: 20px;
  border-top: 2px solid ${theme.colors.border};
`;
export const Text = styled.span`
  font-size: 15px;
`;
export const TitleContainer = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.19rem;
  padding-inline: 20px;
`;
