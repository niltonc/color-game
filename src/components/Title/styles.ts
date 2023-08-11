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
  --color-1: #186cb8;
  --color-2: #2a9a9f;
  --color-3: #f1b211;
`;

export const TitleWord2 = styled(TitleWord)`
  --color-1: #e83611;
  --color-2: #accfcb;
  --color-3: #186cb8;
`;

export const TitleWord3 = styled(TitleWord)`
  --color-1: #2a9a9f;
  --color-2: #f9002f;
  --color-3: #accfcb;
`;

export const Title = styled.div`
  gap: 5px;
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
