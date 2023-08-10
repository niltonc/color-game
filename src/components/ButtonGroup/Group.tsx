import React from 'react';
import { ButtonGroupWrapper } from './styles';

const ButtonGroup: React.FC<ChildrenProp> = ({ children }) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
