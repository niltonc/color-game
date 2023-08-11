import React from 'react';
import { ButtonWrapper } from './styles';

const Button: React.FC<ButtonGruopProps> = ({ children, blr, ...rest }) => {
  return (
    <ButtonWrapper blr={blr} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
