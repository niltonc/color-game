import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  ${(props) => props.variant === 'primary' && css``}

  ${(props) =>
    props.variant === 'text' &&
    css`
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      border: none;
      min-width: 180px;
      outline: none;
      padding: 12px 16px;
      transition: background-color 0.2s ease;
      border-radius: 4px;
      background-color: transparent;
      color: ${theme.colors.gray_400};
      &:active {
        color: ${theme.colors.gray_500};
        transform: translate3d(0, 2px, 0);
      }
      &:hover {
        transition-duration: 0.1s;
        background-color: rgba(${theme.colors.gray_500}, 0.6);
      }
    `}
`;
