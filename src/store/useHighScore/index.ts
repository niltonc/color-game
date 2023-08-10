import { create } from 'zustand';

export interface GlobalData {
  highScore: boolean;
  setHighScore: (payload: boolean) => void;
}

export const useHighScore = create<GlobalData>((set) => ({
  highScore: false,
  setHighScore: (payload: boolean) => {
    set({ highScore: payload });
  }
}));
