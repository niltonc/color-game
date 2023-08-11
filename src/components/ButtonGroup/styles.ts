import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonGroupWrapper = styled.div`
  display: flex;
  overflow: hidden;
  box-shadow: ${theme.box.shadow};
  border-radius: ${theme.border.radius};
  border: 2px solid ${theme.colors.border};
`;

export const ButtonWrapper = styled.button<ButtonGruopProps>`
  flex: 1;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: ${theme.colors.gray_500};
  font-size: ${theme.font.sizes.xxxsmall};
  background-color: ${theme.colors.gray_50};
  &:hover {
    background-color: ${theme.colors.gray_400};
    color: ${theme.colors.white};
  }
  &:active {
    transform: translate3d(0, 0.3px, 0);
  }
  ${(props) =>
    props.blr &&
    css`
      border-inline: 1.2px solid ${theme.colors.border};
    `}
`;
