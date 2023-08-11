import { useEffect } from 'react';
import { create } from 'zustand';

export interface GlobalData {
  highScore: number;
  setHighScore: (payload: number) => void;
  clearHighScore: () => void;
  isStart: boolean;
  setIsStart: (payload: boolean) => void;
}

const useGlobalStore = create<GlobalData>((set) => ({
  highScore: 0,
  setHighScore: (payload: number) => {
    set({ highScore: payload });
  },
  clearHighScore: () => {
    set({ highScore: 0 });
  },

  isStart: false,
  setIsStart: (payload: boolean) => {
    set({ isStart: payload });
  }
}));

export { useGlobalStore };
