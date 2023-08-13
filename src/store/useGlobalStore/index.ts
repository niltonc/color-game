import { create } from 'zustand';

const useGlobalStore = create<GlobalData>((set) => ({
  score: 0,
  isStart: false,
  setScore: (payload: number) => {
    set({ score: payload });
  },
  setIsStart: (payload: boolean) => {
    set({ isStart: payload });
  }
}));

export { useGlobalStore };
