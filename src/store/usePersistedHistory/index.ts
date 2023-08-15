import { create } from 'zustand';
import { useEffect } from 'react';

const getInitialHistoryScore = () => {
  let initialStoredHistoryScore = null;

  try {
    initialStoredHistoryScore = localStorage.getItem('historyScore');
  } catch (error) {
    console.error('Error accessing localStorage:', error);
  }

  return initialStoredHistoryScore !== null
    ? JSON.parse(initialStoredHistoryScore)
    : [];
};

const useHistoryStore = create<historyData>((set) => ({
  historyScore: getInitialHistoryScore(),
  setHistoryScore: (payload) => {
    set({ historyScore: payload });
  },
  clearHistoryScore: () => {
    set({ historyScore: [] });
  }
}));

export { useHistoryStore };

const usePersistedHistoryScore = () => {
  const { historyScore, setHistoryScore, clearHistoryScore } =
    useHistoryStore();

  useEffect(() => {
    window.localStorage.setItem('historyScore', JSON.stringify(historyScore));
  }, [historyScore]);

  return { historyScore, setHistoryScore, clearHistoryScore };
};

export { usePersistedHistoryScore };
