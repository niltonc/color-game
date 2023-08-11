import create from 'zustand';

export interface HighScoreData {
  highScore: number;
  setHighScore: (payload: number) => void;
}

export const useHighScore = create<HighScoreData>((set) => ({
  highScore: Number(localStorage.getItem('highScore')) || 0,
  setHighScore: (score) => {
    localStorage.setItem('highScore', String(score));
    set({ highScore: score });
  }
}));
