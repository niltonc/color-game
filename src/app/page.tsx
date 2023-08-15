'use client';
import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import Title from '@/components/Title';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import ScoreBoard from '@/components/ScoreBoard';
import ScoreHistory from '@/components/ScoreHistory';
import { ButtonGroup } from '@/components/ButtonGroup';
import ScrollSection from '@/components/ScrollSection';
import SquareGameColor from '@/components/SquareGameColor';

import { useGlobalStore } from '@/store/useGlobalStore';
import { usePersistedHighScore } from '@/store/usePersistedHighScore';
import { usePersistedPlayerData } from '@/store/usePersistedPlayerScore';
import { usePersistedHistoryScore } from '@/store/usePersistedHistory';

import { startTimer } from '@/utils/timer';
import { randomColorOptionsGenerator } from '@/utils/randomColorOptionsGenerator';
import {
  difficultMode,
  generateRandomHexdecimalColor,
  progress
} from '@/utils/constants';
import {
  AppContainer,
  ContainerReset,
  MainContent,
  PlayerScoreContainer,
  Span,
  Div,
  HistoryContainer
} from '@/styles';

export default function Home() {
  const { isStart, score, setIsStart, setScore } = useGlobalStore(
    (state) => state
  );
  const { highScore, setHighScore, clearHighScore } = usePersistedHighScore();
  const { playerScores, clearPlayerScores } = usePersistedPlayerData();
  const { historyScore, setHistoryScore } = usePersistedHistoryScore();

  const orderPlayScores = playerScores.sort((a, b) => b.score - a.score);

  const [time, setTime] = useState(30);
  const [playerScore, setPlayerScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
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
    setIsStart(false);
    setPlayerScore(score);
  };

  const handleResetAll = () => {
    stopGame();
    setHistoryScore([]);
    clearHighScore();
    clearPlayerScores();
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

    setTab(false);
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
          setModalOpen(true);
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

  return (
    <AppContainer>
      <Sidebar tab={tab} onClick={() => setTab(!tab)}>
        <ScrollSection>
          {!tab && (
            <HistoryContainer>
              {historyScore
                .map((item, index) => (
                  <ScoreHistory
                    key={index}
                    successLabel={item.successColor}
                    errorLabel={item.errorColor}
                    type={
                      item.successColor === item.errorColor
                        ? 'success'
                        : 'error'
                    }
                    time={item.timeToSelect}
                    color={item.errorColor}
                  />
                ))
                .reverse()}
            </HistoryContainer>
          )}
          {tab && (
            <>
              {orderPlayScores.map((player, index) => (
                <PlayerScoreContainer key={index}>
                  <Span>{player.playerName}</Span>
                  <Span>{player.score} Points</Span>
                </PlayerScoreContainer>
              ))}
            </>
          )}
        </ScrollSection>
      </Sidebar>

      <MainContent>
        <Div>
          <Title />

          <ScoreBoard
            score={score}
            highScore={highScore}
            time={time}
            onReset={stopGame}
            disabled={!isStart}
          />

          <SquareGameColor
            onEasyMode={() => starGame('easy')}
            onMediumMode={() => starGame('medium')}
            onHardMode={() => starGame('hard')}
            color={correctColor}
            progress={progress(time)}
          />

          {isStart && (
            <ButtonGroup.Root>
              {colors.map((color, index) => (
                <ButtonGroup.Item
                  key={color}
                  onClick={() => handleColorSelectedOption(color, correctColor)}
                  blr={index > 0 && index < colors.length - 1}
                >
                  {color}
                </ButtonGroup.Item>
              ))}
            </ButtonGroup.Root>
          )}
        </Div>
      </MainContent>

      <ContainerReset>
        <Button onClick={() => handleResetAll()} variant="text">
          Reset All
        </Button>
      </ContainerReset>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        score={playerScore}
      />
    </AppContainer>
  );
}
