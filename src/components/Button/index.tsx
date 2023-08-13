import React from 'react';
import { ButtonWrapper } from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} {...rest}>
      {children}
    </ButtonWrapper>
  );
};
export default Button;
