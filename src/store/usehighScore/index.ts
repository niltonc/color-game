import { saveValue } from '@/utils/storage';
import create from 'zustand';

export interface GlobalData {
  highScore: number;
  setHighScore: (payload: number) => void;
}

const useHighScore = create<GlobalData>((set) => ({
  highScore: Number(localStorage.getItem('highScore')) || 0,
  setHighScore: (score) => {
    saveValue('highScore', String(score));
    set({ highScore: score });
  }
}));

export default useHighScore;
