import { ButtonWrapper } from './styles';

interface ButtonGruopProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonGruopProps> = ({
  selected,
  children,
  ...rest
}) => {
  return (
    <ButtonWrapper selected={selected} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
