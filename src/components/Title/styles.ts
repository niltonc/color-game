import theme from '@/styles/theme';
import styled, { keyframes } from 'styled-components';

const colorAnimation = keyframes`
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
`;

const TitleWord = styled.div`
  animation: ${colorAnimation} 2s infinite;
`;

export const TitleWord1 = styled(TitleWord)`
  --color-1: ${theme.colors.color_1};
  --color-2: ${theme.colors.color_2};
  --color-3: ${theme.colors.color_3};
`;

export const TitleWord2 = styled(TitleWord)`
  --color-1: ${theme.colors.color_4};
  --color-2: ${theme.colors.color_5};
  --color-3: ${theme.colors.color_6};
`;

export const TitleWord3 = styled(TitleWord)`
  --color-1: ${theme.colors.color_7};
  --color-2: ${theme.colors.color_8};
  --color-3: ${theme.colors.color_9};
`;

export const Title = styled.div`
  gap: 5px;
  display: flex;
  font-size: ${theme.font.sizes.large};
  font-weight: bold;
  text-transform: uppercase;
`;
