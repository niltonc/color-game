export const startTimer = (
  setTime: (time: number) => void,
  setIsStart: (start: boolean) => void
) => {
  setTime(30);
  setIsStart(true);
};
