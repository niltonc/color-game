'use client';
import React, { useEffect, useState } from 'react';
import ColorSquare from '@/components/colorSquare';
import { ButtonGroup } from '@/components/ButtonGroup';
import PointControler from '@/components/score';
import ColorfulTextComponent from '@/components/Title';
import Sidebar from '@/components/Sidebar';
import ScrollSection from '@/components/ScrollSection';
import { AppContainer, MainContent, ScoreContainer } from '@/styles/global';
import ColorResult from '@/components/ColorResult';
import Button from '@/components/button';

type ColorHistoryEntry = {
  color: string;
  success: boolean;
};

export default function Home() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [time, setTime] = useState(10);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [gameInProgress, setGameInProgress] = useState(false);
  const [colorHistory, setColorHistory] = useState<ColorHistoryEntry[]>([]);

  const handleButtonClick = (buttonIndex: number) => {
    if (selectedButton === buttonIndex && gameInProgress) {
      setScore(score + 5);
      setTime(time + 1);
    } else {
      setScore(score - 1);
      setTime(time - 2);
    }

    const newColor = generateRandomColor();
    setColorHistory([
      ...colorHistory,
      { color: currentColor, success: selectedButton === buttonIndex }
    ]);
    setCurrentColor(newColor);
    setSelectedButton(0);
  };

  const handleStartGame = () => {
    setScore(0);
    setTime(10);
    setCurrentColor(generateRandomColor());
    setColorHistory([]);
    setGameInProgress(true);
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }

    if (gameInProgress && time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setGameInProgress(false);
    }
  }, [score, highScore, time, gameInProgress]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleReset = () => {
    setScore(0);
    setTime(10);
    setCurrentColor(generateRandomColor());
    setColorHistory([]);
    setGameInProgress(false);
  };

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
            <ColorResult type="success" color="red" />
            <ColorResult type="error" errorLabel="color" successLabel="color" />
          </div>
        </ScrollSection>
      </Sidebar>

      <MainContent>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ColorfulTextComponent />
          </div>
          <div style={{ paddingBlock: 15 }}>
            <PointControler
              score={score}
              highScore={highScore}
              time={time}
              onReset={handleReset}
            />
          </div>

          <ColorSquare color={currentColor} progress={50} />

          <div style={{ paddingBlock: 15 }}>
            <ButtonGroup.Root>
              <ButtonGroup.Item
                selected={selectedButton === 1}
                onClick={() => handleButtonClick(1)}
              >
                #012s2
              </ButtonGroup.Item>
              <ButtonGroup.Item
                blr
                selected={selectedButton === 2}
                onClick={() => handleButtonClick(2)}
              >
                #01cdfe
              </ButtonGroup.Item>
              <ButtonGroup.Item
                selected={selectedButton === 3}
                onClick={() => handleButtonClick(3)}
              >
                #01c124
              </ButtonGroup.Item>
            </ButtonGroup.Root>
          </div>
        </div>
      </MainContent>
      <Button variant="text" onClick={() => handleReset()}>
        Reset All
      </Button>
    </AppContainer>
  );
}
