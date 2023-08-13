import React from 'react';
import { InputWrapper, InputField } from './styles';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {
  return (
    <InputWrapper>
      <InputField {...rest} />
    </InputWrapper>
  );
};

export default TextField;
