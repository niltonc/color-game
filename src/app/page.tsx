'use client';

import { useState } from 'react';
import ColorSquare from '@/components/ColorSquare';
import { ButtonGroup } from '@/components/ButtonGroup';
import PointControler from '@/components/score';
import ColorfulTextComponent from '@/components/Title';
import Sidebar from '@/components/Sidebar';
import ScrollSection from '@/components/ScrollSection';
import { AppContainer, MainContent, ScoreContainer } from '@/styles/global';
import ColorResult from '@/components/ColorResult';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex: React.SetStateAction<number>) => {
    setSelectedButton(buttonIndex);
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
              score="20"
              highScore="60"
              time="10"
              onReset={() => console.log('reset')}
            />
          </div>
          <ColorSquare color="#01cdfe" progress={50} />

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
    </AppContainer>
  );
}
