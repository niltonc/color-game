interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'text';
  children?: React.ReactNode;
}
interface ButtonGruopProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  blr?: boolean;
}
interface ColorResultStyleProps {
  fz?: boolean;
}
type ColorResultProps = {
  type?: 'success' | 'error';
  color?: string;
  timezone?: number;
  errorLabel?: string;
  successLabel?: string;
};
interface ColorSquareProps {
  color: string;
  progress: number;
  onEasyMode?: () => void;
  onMediumMode?: () => void;
  onHardMode?: () => void;
}
interface SquareStyleProps {
  color?: string;
  progress?: number;
}

interface PointControler {
  score?: number;
  highScore?: number;
  time?: number;
  onReset?: () => void;
}
interface ChildrenProp {
  children?: React.ReactNode;
}
