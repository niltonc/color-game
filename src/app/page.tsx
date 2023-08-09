'use client';
import Button from '@/components/button';
import ColorSquare from '@/components/colorSquare';

export default function Home() {
  return (
    <main>
      GUESS THE COLOR
      <div>score component</div>
      <Button onClick={() => console.log('START DO JOGO')}>START</Button>
      <ColorSquare color="#ff6f7a" progress={50} />
      <div>quadrado com a color</div>
      <div>selecão da color</div>
    </main>
  );
}
