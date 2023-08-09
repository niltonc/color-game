'use client';
import Button from '@/components/Button';
import ColorSquare from '@/components/colorSquare';
import { ButtonGroup } from '@/components/ButtonGroup';
import { useState } from 'react';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex: React.SetStateAction<number>) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <main>
      GUESS THE COLOR
      <div>score component</div>
      <Button onClick={() => console.log('START DO JOGO')}>START</Button>
      <ColorSquare color="#ff6f7a" progress={50} />
      <div style={{ width: 350 }}>
        <ButtonGroup.Root>
          <ButtonGroup.Item
            selected={selectedButton === 1}
            onClick={() => handleButtonClick(1)}
          >
            1
          </ButtonGroup.Item>
          <ButtonGroup.Item
            selected={selectedButton === 2}
            onClick={() => handleButtonClick(2)}
          >
            2
          </ButtonGroup.Item>
          <ButtonGroup.Item
            selected={selectedButton === 3}
            onClick={() => handleButtonClick(3)}
          >
            3
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </div>
    </main>
  );
}
