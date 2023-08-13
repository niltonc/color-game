import { create } from 'zustand';
import { useEffect } from 'react';
import { getValue, saveValue } from '@/utils/storage';
const usePlayerScore = create<playerScoreData>((set) => ({
  playerScore: 0,
  setPlayerScore: (payload: number) => {
    set({ playerScore: payload });
  },
  clearPlayerScore: () => {
    set({ playerScore: 0 });
  }
}));

export { usePlayerScore };

const usePersistedHighScore = () => {
  const { playerScore, setPlayerScore, clearPlayerScore } = usePlayerScore();

  useEffect(() => {
    const initialStoredHighScore = getValue('playerScore');
    if (initialStoredHighScore !== null) {
      setPlayerScore(Number(initialStoredHighScore));
    }
  }, [setPlayerScore]);

  useEffect(() => {
    saveValue('playerScore', playerScore.toString());
  }, [playerScore]);

  return { playerScore, setPlayerScore, clearPlayerScore };
};

export { usePersistedHighScore };
