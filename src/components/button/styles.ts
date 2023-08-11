import styled from 'styled-components';
import theme from '@/styles/theme';

export const ButtonWrapper = styled.button`
  background-color: transparent;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.primary};
  cursor: pointer;
  &:active {
    color: ${theme.colors.gray_500};
    transform: translate3d(0, 2px, 0);
    background-color: rgba(${theme.colors.gray_500}, 0.6);
  }
  &:hover {
    transition-duration: 0.1s;
    background-color: rgba(${theme.colors.gray_500}, 0.6);
  }
`;
