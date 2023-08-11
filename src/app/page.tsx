'use client';
import React, { useEffect, useState } from 'react';
import SquareGameColor from '@/components/SquareGameColor';
import { ButtonGroup } from '@/components/ButtonGroup';
import ScoreBoard from '@/components/ScoreBoard';
import Title from '@/components/Title';
import Sidebar from '@/components/Sidebar';
import ScrollSection from '@/components/ScrollSection';
import { AppContainer, MainContent, ScoreContainer } from '@/styles/global';
import ColorResult from '@/components/ColorResult';
import Button from '@/components/Button';
import { useHighScore } from '@/store/usehighScore';
import { generateRandomHexdecimalColor } from '@/utils/generateRandomColor';
import { useStartApp } from '@/store/useStartApp';

type colorHistory = {
  successColor: string;
  errorColor: string;
  timeToSelect: number;
};

export default function Home() {
  const [difficultLevel, setDifficultLevel] = useState<string>('easy');
  const [correctColor, setCorrectColor] = useState<string>(
    generateRandomHexdecimalColor()
  );
  const [colors, setColors] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const [time, setTime] = useState(30);
  const { isStart, setIsStart } = useStartApp((state) => state);
  const { highScore, setHighScore } = useHighScore((state) => state);

  const progress = (time / 30) * 100;

  const [history, setHistory] = useState<colorHistory[]>([]);

  const startTime = () => {
    setTime(30);
    setIsStart(true);
  };

  const setDifficultMode = (difficult: string) => {
    setDifficultLevel(difficult);

    const difficultModes: Record<string, number> = {
      easy: 3,
      medium: 4,
      hard: 5
    };

    const numColors = difficultModes[difficult] || difficultModes['easy'];

    return numColors;
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
    startTime();

    const numcolors = setDifficultMode(difficult);

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

      const numcolors = setDifficultMode(difficultLevel);

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

  return (
    <AppContainer>
      <Sidebar>
        <div
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            paddingInline: 20,
            marginTop: 20
          }}
        >
          Current/Lastest Game
        </div>

        <ScoreContainer>
          <div style={{ fontSize: 15 }}>Guessed Color</div>
          <div style={{ fontSize: 15 }}>Correct Color</div>
          <div style={{ fontSize: 15 }}>Score</div>
        </ScoreContainer>

        <ScrollSection>
          <div style={{ paddingInline: 20 }}>
            {history
              .map((item, index) => (
                <ColorResult
                  key={index}
                  successLabel={item.successColor}
                  errorLabel={item.errorColor}
                  type={
                    item.successColor === item.errorColor ? 'success' : 'error'
                  }
                  timezone={item.timeToSelect}
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
              progress={progress}
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
      <Button variant="text" onClick={stop}>
        Reset All
      </Button>
    </AppContainer>
  );
}
