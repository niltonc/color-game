import { create } from 'zustand';

const useGlobalStore = create<GlobalData>((set) => ({
  // highScore: 0,
  // setHighScore: (payload: number) => {
  //   set({ highScore: payload });
  // },
  // clearHighScore: () => {
  //   set({ highScore: 0 });
  // },

  isStart: false,
  setIsStart: (payload: boolean) => {
    set({ isStart: payload });
  }
}));

export { useGlobalStore };
