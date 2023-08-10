import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  ${(props) =>
    props.variant === 'primary' &&
    css`
      align-self: center;
      background-color: ${theme.colors.white};
      background-image: none;
      background-position: 0 90%;
      background-repeat: repeat no-repeat;
      background-size: 4px 3px;
      border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
      border-style: solid;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
      box-sizing: border-box;
      color: ${theme.colors.gray_400};
      cursor: pointer;
      display: inline-block;
      font-family: Neucha, sans-serif;
      font-size: 1rem;
      line-height: 23px;
      outline: none;
      padding: 0.75rem;
      text-decoration: none;
      transition: all 235ms ease-in-out;
      border-bottom-left-radius: 15px 255px;
      border-bottom-right-radius: 225px 15px;
      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
      }
      &:active {
        transform: translate3d(0, -2px, 0);
      }
      &:focus {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
      }
    `}

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
