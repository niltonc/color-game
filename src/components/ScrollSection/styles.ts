import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  height: 550px;
`;
export const ScrollableContent = styled.div`
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray_200};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.hover};
  }
`;

export const Content = styled.div``;
