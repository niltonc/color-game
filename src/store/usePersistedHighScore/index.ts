import React, { useEffect } from 'react';
import { useGlobalStore } from '../useGlobalStore';
import { getValue, saveValue } from '@/utils/storage';

const usePersistedHighScore = () => {
  const {
    highScore: updateHighScore,
    setHighScore,
    clearHighScore
  } = useGlobalStore();

  useEffect(() => {
    const initialStoredHighScore = getValue('highScore');
    if (initialStoredHighScore !== null) {
      setHighScore(Number(initialStoredHighScore));
    }
  }, [setHighScore]);

  useEffect(() => {
    saveValue('highScore', updateHighScore.toString());
  }, [updateHighScore]);

  return { updateHighScore, setHighScore, clearHighScore };
};

export { usePersistedHighScore };
