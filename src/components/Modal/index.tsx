import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import CloseIcon from '@/assets/Close_round.svg';
import {
  BodyContainer,
  ButtonContainer,
  CloseContainer,
  Container,
  ModalContent,
  ModalOverlay,
  Span
} from './styles';
import { usePersistedPlayerData } from '@/store/usePersistedPlayerScore';

const Modal: React.FC<ModalProps> = ({ open, onClose, score }) => {
  const [playerName, setPlayerName] = useState('');
  const { playerScores, setPlayerScores } = usePersistedPlayerData();

  const handleSaveClick = () => {
    if (playerName && score) {
      const newPlayerScore: PlayerScore = { playerName: playerName, score };
      setPlayerScores([...playerScores, newPlayerScore]);
      setPlayerName('');
    }
    if (onClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseContainer>
          <Button onClick={onClose} variant="link">
            <Image src={CloseIcon} width={20} height={20} alt="Close" />
          </Button>
        </CloseContainer>

        <BodyContainer>
          <Container>
            <Span size={20}>Your score was:</Span>
            <Span size={55} color="#77d353" bold>
              {score}
            </Span>
          </Container>

          <Span>Do you want to save your score?</Span>
          <TextField
            placeholder="Insert your name here"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <ButtonContainer>
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSaveClick}>Save</Button>
          </ButtonContainer>
        </BodyContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
