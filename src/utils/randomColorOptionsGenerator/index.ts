import { generateRandomHexdecimalColor } from '@/utils/constants';

export const randomColorOptionsGenerator = (
  numberOfColors: number,
  setCorrectColor: (correctHexdecimalColor: string) => void,
  setColors: (colors: string[]) => void
) => {
  const colors: string[] = [];
  const correctHexdecimalColor = generateRandomHexdecimalColor();

  setCorrectColor(correctHexdecimalColor);

  for (let i = 0; i < numberOfColors - 1; i++) {
    const randomIncorrectColor = generateRandomHexdecimalColor();
    colors.push(randomIncorrectColor);
  }
  const randomCorrectColorPosition = Math.floor(Math.random() * numberOfColors);

  colors.splice(randomCorrectColorPosition, 0, correctHexdecimalColor);
  setColors(colors);
};
