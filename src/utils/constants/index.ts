export const generateRandomHexdecimalColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const progress = (time: number) => (time / 30) * 100;

export const difficultMode: DifficultModes = {
  easy: 3,
  medium: 4,
  hard: 5
};

export const getLuminance = (hexColor: string) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};
