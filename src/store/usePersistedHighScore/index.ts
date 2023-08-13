import { create } from 'zustand';
import { useEffect } from 'react';
import { getValue, saveValue } from '@/utils/storage';

const useHighScore = create<HighScoreData>((set) => ({
  highScore: 0,
  setHighScore: (payload: number) => {
    set({ highScore: payload });
  },
  clearHighScore: () => {
    set({ highScore: 0 });
  }
}));

export { useHighScore };

const usePersistedHighScore = () => {
  const { highScore, setHighScore, clearHighScore } = useHighScore();

  useEffect(() => {
    const initialStoredHighScore = getValue('highScore');
    if (initialStoredHighScore !== null) {
      setHighScore(Number(initialStoredHighScore));
    }
  }, [setHighScore]);

  useEffect(() => {
    saveValue('highScore', highScore.toString());
  }, [highScore]);

  return { highScore, setHighScore, clearHighScore };
};

export { usePersistedHighScore };
