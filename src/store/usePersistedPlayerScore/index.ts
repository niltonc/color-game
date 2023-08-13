import { create } from 'zustand';
import { useEffect } from 'react';
import { getValue, saveValue } from '@/utils/storage';

const getInitialPlayerScores = () => {
  const initialStoredPlayerScores = getValue('playerScores');
  return initialStoredPlayerScores !== null
    ? JSON.parse(initialStoredPlayerScores)
    : [];
};

const usePlayerStore = create<PlayerData>((set) => ({
  playerScores: getInitialPlayerScores(),
  setPlayerScores: (payload) => {
    set({ playerScores: payload });
  },
  clearPlayerScores: () => {
    set({ playerScores: [] });
  }
}));

export { usePlayerStore };

const usePersistedPlayerData = () => {
  const { playerScores, setPlayerScores, clearPlayerScores } = usePlayerStore();

  // useEffect(() => {
  //   const initialStoredHighScores = getValue('playerScores');
  //   if (initialStoredHighScores !== null) {
  //     setPlayerScores(JSON.parse(initialStoredHighScores));
  //   }
  // }, [setPlayerScores]);

  useEffect(() => {
    saveValue('playerScores', JSON.stringify(playerScores));
  }, [playerScores]);

  return { playerScores, setPlayerScores, clearPlayerScores };
};

export { usePersistedPlayerData };
