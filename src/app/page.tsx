'use client';

import React, { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Title from '@/components/Title';
import Sidebar from '@/components/Sidebar';
import ScoreBoard from '@/components/ScoreBoard';
import ScoreHistory from '@/components/ScoreHistory';
import { ButtonGroup } from '@/components/ButtonGroup';
import ScrollSection from '@/components/ScrollSection';
import SquareGameColor from '@/components/SquareGameColor';

import { useGlobalStore } from '@/store/useGlobalStore';
import { usePersistedHighScore } from '@/store/usePersistedHighScore';
import { generateRandomHexdecimalColor } from '@/utils/generateRandomColor';

import { AppContainer, MainContent } from '@/styles/global';
import { difficultMode, progress, startTimer } from '@/utils/constants';

type colorHistory = {
  successColor: string;
  errorColor: string;
  timeToSelect: number;
};

export default function Home() {
  const { highScore, isStart, setIsStart } = useGlobalStore((state) => state);
  const { setHighScore, clearHighScore } = usePersistedHighScore();

  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [colors, setColors] = useState<string[]>([]);
  const [history, setHistory] = useState<colorHistory[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('easy');
  const [correctColor, setCorrectColor] = useState<string>(
    generateRandomHexdecimalColor()
  );

  const setDifficultyMode = (difficult: string) => {
    setDifficultyLevel(difficult);
    const numberButtons = difficultMode[difficult] || difficultMode['easy'];
    return numberButtons;
  };

  const setColorOptions = (numColors: number) => {
    const correctHexdecimalColor = generateRandomHexdecimalColor();
    setCorrectColor(correctHexdecimalColor);

    const colors: string[] = [];

    for (let i = 0; i < numColors - 1; i++) {
      const randomIncorrectColor = generateRandomHexdecimalColor();

      colors.push(randomIncorrectColor);
    }

    const colorPositionOnColors = Math.floor(Math.random() * numColors);

    colors.splice(colorPositionOnColors, 0, correctHexdecimalColor);

    setColors(colors);
  };

  const start = (difficult: string) => {
    startTimer(setTime, setIsStart);

    const numcolors = setDifficultyMode(difficult);

    setColorOptions(numcolors);
  };

  const stop = () => {
    if (score > highScore) {
      setHighScore(score);
    }

    setTime(30);
    setCorrectColor(generateRandomHexdecimalColor());
    setColors([]);
    setScore(0);
    setHistory([]);
    setIsStart(false);
  };

  const selectOption = (color: string, successColor: string) => {
    if (color == correctColor) {
      setHistory([
        ...history,
        { successColor, errorColor: color, timeToSelect: 30 - time }
      ]);

      setScore(score + 5);

      const numcolors = setDifficultyMode(difficultyLevel);

      setColorOptions(numcolors);
    } else {
      setHistory([
        ...history,
        { successColor, errorColor: color, timeToSelect: 30 - time }
      ]);

      if (score > 0) {
        setScore(score - 1);
      }
    }
  };

  const getTimeColorFromHistory = (time: number) => {
    const currentTime = 30 - time;
    const intervalStart = currentTime - 10;
    const intervalEnd = currentTime;

    const hasColorInInterval = history.some(
      (item) =>
        item.timeToSelect >= intervalStart && item.timeToSelect <= intervalEnd
    );

    if (hasColorInInterval) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          stop();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStart, time]);

  useEffect(() => {
    if (isStart) {
      if (time > 0 && time < 30) {
        if (time % 10 === 0 && !getTimeColorFromHistory(time)) {
          if (score > 0) {
            setScore(score - 2);
          }
        }
      }
    }
  }, [isStart, time]);

  const handleResetAll = () => {
    clearHighScore();
  };

  return (
    <AppContainer>
      <Sidebar>
        <ScrollSection>
          <div style={{ paddingInline: 20 }}>
            {history
              .map((item, index) => (
                <ScoreHistory
                  key={index}
                  successLabel={item.successColor}
                  errorLabel={item.errorColor}
                  type={
                    item.successColor === item.errorColor ? 'success' : 'error'
                  }
                  time={item.timeToSelect}
                  color={item.errorColor}
                />
              ))
              .reverse()}
          </div>
        </ScrollSection>
      </Sidebar>

      <MainContent>
        <div>
          <Title />
          <div style={{ paddingBlock: 15 }}>
            <ScoreBoard
              score={score}
              highScore={highScore}
              time={time}
              onReset={stop}
            />
          </div>
          <div style={{ width: 450, background: 'red' }}>
            <SquareGameColor
              onEasyMode={() => start('easy')}
              onMediumMode={() => start('medium')}
              onHardMode={() => start('hard')}
              color={correctColor}
              progress={progress(time)}
            />
          </div>
          {isStart && (
            <div style={{ paddingBlock: 15 }}>
              <ButtonGroup.Root>
                {colors.map((color, index) => (
                  <ButtonGroup.Item
                    key={color}
                    onClick={() => selectOption(color, correctColor)}
                    blr={index > 0 && index < colors.length - 1}
                  >
                    {color}
                  </ButtonGroup.Item>
                ))}
              </ButtonGroup.Root>
            </div>
          )}
        </div>
      </MainContent>
      <Button onClick={() => handleResetAll()}>Reset All</Button>
    </AppContainer>
  );
}
