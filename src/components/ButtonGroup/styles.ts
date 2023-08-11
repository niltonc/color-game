import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonGroupWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${theme.colors.gray_100};
`;

export const ButtonWrapper = styled.button<ButtonGruopProps>`
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: ${theme.colors.gray_500};
  background-color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.hover};
    color: ${theme.colors.gray_300};
  }
  ${(props) =>
    props.blr &&
    css`
      border-left: 2px solid ${theme.colors.gray_100};
      border-right: 2px solid ${theme.colors.gray_100};
    `}
`;
