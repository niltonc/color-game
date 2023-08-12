export const startTimer = (
  setTime: (time: number) => void,
  setIsStart: (start: boolean) => void
) => {
  setTime(30);
  setIsStart(true);
};

export const updateTimer = (
  time: number,
  setTime: (prevState: number | ((prevState: number) => number)) => void,
  stopGame: () => void
) => {
  if (time > 0) {
    setTime((prevTime: number) => prevTime - 1);
  } else {
    stopGame();
  }
};
