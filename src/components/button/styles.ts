import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

interface ButtonStyleProps {
  variant: string;
}
export const ButtonWrapper = styled.button<ButtonStyleProps>`
  height: 40px;
  display: flex;
  cursor: pointer;
  font-weight: 400;
  border-width: 0px;
  font-style: normal;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: #ffffff;
      background: ${theme.colors.gray_500};
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        background: ${theme.colors.gray_300};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.gray_200};
        outline: 0;
      }
      &:active {
        background: ${theme.colors.gray_500};
      }
    `}
  ${(props) =>
    props.variant === 'outline' &&
    css`
      color: ${theme.colors.gray_500};
      background: #fff;
      border-color: ${theme.colors.gray_500};
      border-width: 1.5px;
      border-style: solid;
      outline: 0;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        color: ${theme.colors.gray_300};
        border-color: ${theme.colors.gray_300};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.gray_200};
        outline: 0;
      }
      &:active {
        color: ${theme.colors.gray_500};
        border-color: ${theme.colors.gray_500};
      }
    `}

    ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary};
      border: none;
      &:hover {
        background-color: ${theme.colors.hover};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.gray_100};
        outline: 0;
      }
      &:active {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.gray_100};
      }
    `}
`;
