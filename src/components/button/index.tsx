import React from 'react';
import { ButtonWrapper } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
export default Button;
