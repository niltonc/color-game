import styled from 'styled-components';
import theme from '@/styles/theme';

interface SelectHEXStyleProps {
  selected?: boolean;
  first?: boolean;
}
export const ButtonGroupWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${theme.colors.gray_200};
`;

export const ButtonWrapper = styled.button<SelectHEXStyleProps>`
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.gray_300};
  background-color: ${(props) =>
    props.selected ? theme.colors.light_purple : theme.colors.white};
  &:hover {
    background-color: ${(props) =>
      props.selected ? theme.colors.light_green : theme.colors.hover};
    color: ${(props) =>
      props.selected ? theme.colors.light_purple : theme.colors.gray_300};
  }
`;
