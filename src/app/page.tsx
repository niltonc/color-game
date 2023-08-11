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
import useHighScore from '@/store/usehighScore';
import { generateRandomHexdecimalColor } from '@/utils/generateRandomColor';

export default function Home() {
  const [difficultLevel, setDifficultLevel] = useState<string>('easy');
  const [correctColor, setCorrectColor] = useState<string>(
    generateRandomHexdecimalColor()
  );
  const [colors, setColors] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const progress = (time / 30) * 100;

  /* Função de inicio */
  const startTime = () => {
    setTime(30);
    setIsRunning(true);
  };

  /* Função para setar a dificuldade do jogo */
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

  /* Função para setar as opções de cores */
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

  /* Função principal para iniciar */
  const start = (difficult: string) => {
    startTime();

    const numcolors = setDifficultMode(difficult);

    setColorOptions(numcolors);
  };

  const { highScore, setHighScore } = useHighScore((state) => state);

  /* Função principal para finalizar */
  const stop = () => {
    if (score > highScore) {
      setHighScore(score);
    }

    setTime(30);
    setCorrectColor(generateRandomHexdecimalColor());
    setColors([]);
    setScore(0);
    setIsRunning(false);
  };

  /* Função para selecionar uma opção */
  const selectOption = (color: string) => {
    if (color === correctColor) {
      setScore(score + 5);

      const numcolors = setDifficultMode(difficultLevel);

      setColorOptions(numcolors);
    } else {
      if (score > 0) {
        setScore(score - 1);
      }
    }
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          stop();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (isRunning) {
      if (time > 0 && time < 30) {
        if (time % 10 === 0) {
          if (score > 0) {
            setScore(score - 2);
          }
        }
      }
    }
  }, [isRunning, time]);

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
              onReset={stop}
            />
          </div>

          <ColorSquare
            onEasyMode={() => start('easy')}
            onMediumMode={() => start('medium')}
            onHardMode={() => start('hard')}
            color={correctColor}
            progress={progress}
          />

          <div style={{ paddingBlock: 15 }}>
            <ButtonGroup.Root>
              {colors.map((color) => (
                <ButtonGroup.Item
                  key={color}
                  onClick={() => selectOption(color)}
                >
                  {color}
                </ButtonGroup.Item>
              ))}
            </ButtonGroup.Root>
          </div>
        </div>
      </MainContent>
      <Button variant="text" onClick={stop}>
        Reset All
      </Button>
    </AppContainer>
  );
}
