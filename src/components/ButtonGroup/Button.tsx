import React from 'react';
import { ButtonGroupWrapper } from './styles';

interface ButtonGruopProps {
  children?: React.ReactNode;
}
const ButtonGroup: React.FC<ButtonGruopProps> = ({ children }) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
