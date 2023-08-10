import { ButtonWrapper } from './styles';

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
