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

import { AppContainer, MainContent } from '@/styles/global';
import {
  difficultMode,
  generateRandomHexdecimalColor,
  progress
} from '@/utils/constants';
import { randomColorOptionsGenerator } from '@/utils/randomColorOptionsGenerator';
import { startTimer } from '@/utils/timer';
// import Modal from '@/components/Modal';

export default function Home() {
  const { isStart, setIsStart } = useGlobalStore((state) => state);
  const { highScore, setHighScore, clearHighScore } = usePersistedHighScore();

  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [colors, setColors] = useState<string[]>([]);
  const [historyScore, setHistoryScore] = useState<HistoryScoreProps[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('easy');
  const [correctColor, setCorrectColor] = useState<string>(
    generateRandomHexdecimalColor()
  );

  const setDifficultyMode = (difficult: string) => {
    setDifficultyLevel(difficult);
    const numberOfButtons = difficultMode[difficult] || difficultMode['easy'];
    return numberOfButtons;
  };

  const starGame = (difficult: string) => {
    startTimer(setTime, setIsStart);
    const numberOfButtons = setDifficultyMode(difficult);
    randomColorOptionsGenerator(numberOfButtons, setCorrectColor, setColors);
  };

  const stopGame = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setTime(30);
    setCorrectColor(generateRandomHexdecimalColor());
    setColors([]);
    setScore(0);
    setHistoryScore([]);
    setIsStart(false);
  };
  const handleColorSelectedOption = (color: string, successColor: string) => {
    setHistoryScore([
      ...historyScore,
      { successColor, errorColor: color, timeToSelect: 30 - time }
    ]);

    if (color === correctColor) {
      setScore(score + 5);
    } else if (score > 0) {
      setScore(score - 1);
    }

    const numberOfButtons = setDifficultyMode(difficultyLevel);
    randomColorOptionsGenerator(numberOfButtons, setCorrectColor, setColors);
  };

  const getTimeColorForHistory = (time: number) => {
    const currentTime = 30 - time;
    const intervalStart = currentTime - 10;
    const intervalEnd = currentTime;

    return historyScore.some(
      (item) =>
        item.timeToSelect >= intervalStart && item.timeToSelect <= intervalEnd
    );
  };

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          stopGame();
          // handleOpenModal();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStart, time]);

  useEffect(() => {
    if (
      isStart &&
      time > 0 &&
      time < 30 &&
      time % 10 === 0 &&
      !getTimeColorForHistory(time) &&
      score > 0
    ) {
      setScore(score - 2);
    }
  }, [isStart, time]);

  const handleResetAll = () => {
    stopGame();
    clearHighScore();
  };

  //
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };
  //

  return (
    <AppContainer>
      <Sidebar>
        <ScrollSection>
          <div style={{ paddingInline: 20 }}>
            {historyScore
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
              onReset={stopGame}
            />
          </div>
          <div style={{ width: 450, background: 'red' }}>
            <SquareGameColor
              onEasyMode={() => starGame('easy')}
              onMediumMode={() => starGame('medium')}
              onHardMode={() => starGame('hard')}
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
                    onClick={() =>
                      handleColorSelectedOption(color, correctColor)
                    }
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
      <div
        style={{
          bottom: 10,
          right: 10,
          position: 'absolute'
        }}
      >
        <Button onClick={() => handleResetAll()} variant="text">
          Reset All
        </Button>
      </div>
      {/* <div>
        <button onClick={() => handleOpenModal()}>CHAMA MODAL</button>
        <Modal open={modalOpen} onClose={handleCloseModal} playerScore={200} />
      </div> */}
    </AppContainer>
  );
}
