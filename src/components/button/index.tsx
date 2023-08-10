import { ButtonWrapper } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'text';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <div>
      <ButtonWrapper variant={variant} {...rest}>
        {children}
      </ButtonWrapper>
    </div>
  );
};
export default Button;
