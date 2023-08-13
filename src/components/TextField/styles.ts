import theme from '@/styles/theme';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;
export const InputField = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 8px;
  width: 100%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: ${theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    border: 1px solid ${theme.colors.focus};
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    border: 2px solid ${theme.colors.focus};
  }
`;
