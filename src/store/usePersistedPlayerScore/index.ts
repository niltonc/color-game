import { create } from 'zustand';
import { useEffect } from 'react';
import { getValue, saveValue } from '@/utils/storage';

interface PlayerScoreData {
  playerScore: number;
  playerNames: string[];
  clearPlayerScore: () => void;
  setPlayerScore: (payload: number) => void;
  setPlayerNames: (payload: string[]) => void;
}

const usePlayerData = create<PlayerScoreData>((set) => ({
  playerScore: 0,
  playerNames: [],
  setPlayerScore: (payload: number) => {
    set({ playerScore: payload });
  },
  setPlayerNames: (payload: string[]) => {
    set({ playerNames: payload });
  },
  clearPlayerScore: () => {
    set({ playerScore: 0 });
  }
}));

export { usePlayerData };

const usePersistedPlayerData = () => {
  const {
    playerScore,
    playerNames,
    setPlayerScore,
    setPlayerNames,
    clearPlayerScore
  } = usePlayerData();

  useEffect(() => {
    const initialStoredPlayerScore = getValue('playerScore');
    const initialStoredPlayerNames = getValue('playerNames');

    if (initialStoredPlayerScore !== null) {
      setPlayerScore(Number(initialStoredPlayerScore));
    }

    if (initialStoredPlayerNames !== null) {
      setPlayerNames(JSON.parse(initialStoredPlayerNames));
    }
  }, [setPlayerScore, setPlayerNames]);

  useEffect(() => {
    saveValue('playerScore', playerScore.toString());
    saveValue('playerNames', JSON.stringify(playerNames));
  }, [playerScore, playerNames]);

  return {
    playerScore,
    playerNames,
    setPlayerScore,
    setPlayerNames,
    clearPlayerScore
  };
};

export { usePersistedPlayerData };
