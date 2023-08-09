import { ButtonWrapper } from './styles';

interface ButtonGruopProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children?: React.ReactNode;
  blr?: boolean;
}
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
