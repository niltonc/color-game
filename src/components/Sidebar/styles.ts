import styled from 'styled-components';
import theme from '@/styles/theme';

interface SquareStyleProps {
  progress?: number;
  color?: string;
}
export const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${theme.colors.gray_50};
  color: ${theme.colors.gray_400};
`;
