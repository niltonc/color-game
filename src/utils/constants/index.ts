export const generateRandomHexdecimalColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const progress = (time: number) => (time / 30) * 100;

export const difficultMode: DifficultModes = {
  easy: 3,
  medium: 4,
  hard: 5
};
