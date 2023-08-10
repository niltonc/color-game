'use client';

import ColorSquare from '@/components/colorSquare';
import { ButtonGroup } from '@/components/ButtonGroup';
import { useState } from 'react';
import PointControler from '@/components/score';
import ColorfulTextComponent from '@/components/Title';
import Sidebar from '@/components/Sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex: React.SetStateAction<number>) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <AppContainer>
      <Sidebar>
        <h2>Sidebar</h2>
        <p>Conteúdo da barra lateral...</p>
      </Sidebar>
      <MainContent>
        <div>
          <ColorfulTextComponent />
          <div style={{ paddingBlock: 10 }}>
            <PointControler
              score="20"
              highScore="60"
              time="10"
              onReset={() => console.log('reset')}
            />
          </div>

          <ColorSquare color="#01cdfe" progress={50} />

          <div style={{ paddingBlock: 10 }}>
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
