interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
}
interface ButtonGruopProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  blr?: boolean;
}
interface ColorResultStyleProps {
  variant?: 'light' | 'dark' | 'success';
}
type ScoreHistoryProps = {
  type?: 'success' | 'error';
  color?: string;
  time?: number;
  errorLabel?: string;
  successLabel?: string;
};
interface SquareGameColorProps {
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

interface ScoreBoardProps {
  score?: number;
  highScore?: number;
  time?: number;
  onReset?: () => void;
}
interface ChildrenProp {
  children?: React.ReactNode;
}
interface ScoreBoardStyleProps {
  binline?: boolean;
}
interface GlobalData {
  highScore: number;
  setHighScore: (payload: number) => void;
  clearHighScore: () => void;
  isStart: boolean;
  setIsStart: (payload: boolean) => void;
}

type DifficultModes = {
  [key: string]: number;
};

type HistoryScoreProps = {
  successColor: string;
  errorColor: string;
  timeToSelect: number;
};
