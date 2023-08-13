import { create } from 'zustand';
import { useEffect } from 'react';

const getInitialPlayerScores = () => {
  let initialStoredPlayerScores = null;

  try {
    initialStoredPlayerScores = localStorage.getItem('playerScores');
  } catch (error) {
    console.error('Error accessing localStorage:', error);
  }

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
  //   const initialStoredPlayerScores = window.localStorage.getItem('playerScores');
  //   if (initialStoredPlayerScores !== null) {
  //     setPlayerScores(JSON.parse(initialStoredPlayerScores));
  //   }
  // }, [setPlayerScores]);

  useEffect(() => {
    window.localStorage.setItem('playerScores', JSON.stringify(playerScores));
  }, [playerScores]);

  return { playerScores, setPlayerScores, clearPlayerScores };
};

export { usePersistedPlayerData };
