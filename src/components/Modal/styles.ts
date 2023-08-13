import styled, { css, keyframes } from 'styled-components';
import theme from '@/styles/theme';

const rotateAndScale = keyframes`
  0% {
    transform: rotate(-10deg) scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1.1);
  }
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  padding: 30px 30px;
  background-color: #fff;
  border-radius: ${theme.border.radius};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${rotateAndScale} 0.3s ease-in-out both;
`;

export const Span = styled.span<ModalStyleProps>`
  font-weight: 500;
  color: ${(props) => props.color || theme.colors.primary};
  font-size: ${(props) => props.size || 16}px;
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
