import React, { useEffect } from 'react';
import { useGlobalStore } from '../useGlobalStore';

const usePersistedHighScore = () => {
  const { highScore, setHighScore } = useGlobalStore();

  // Carregar o estado inicial do localStorage, se disponível
  useEffect(() => {
    const storedHighScore = localStorage.getItem('highScore');
    if (storedHighScore !== null) {
      setHighScore(Number(storedHighScore));
    }
  }, [setHighScore]);

  // Atualizar o localStorage sempre que o highScore mudar
  useEffect(() => {
    localStorage.setItem('highScore', highScore.toString());
  }, [highScore]);

  return { highScore, setHighScore };
};

export { usePersistedHighScore };
