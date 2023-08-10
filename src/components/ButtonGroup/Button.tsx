import { ButtonWrapper } from './styles';

const Button: React.FC<ButtonGruopProps> = ({
  selected,
  children,
  blr,
  ...rest
}) => {
  return (
    <ButtonWrapper selected={selected} blr={blr} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
