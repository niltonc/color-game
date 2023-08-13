import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import CloseIcon from '@/assets/Close_round.svg';
import { useOutsideClick } from '@/hook/useOutsideClick';
import { Container, ModalContent, ModalOverlay, Span } from './styles';
import { usePersistedPlayerData } from '@/store/usePersistedPlayerScore';

const Modal: React.FC<ModalProps> = ({ open, onClose, onSave }) => {
  const { playerScore, playerNames, setPlayerNames } = usePersistedPlayerData();
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      setPlayerNames([...playerNames, newPlayerName]);
      setNewPlayerName('');
    }
  };

  const ref = useRef<any>(null);

  const handleClickOutside = () => {
    if (onClose) {
      onClose();
    }
  };

  useOutsideClick(ref, handleClickOutside);

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent ref={ref}>
        <div
          style={{
            position: 'absolute',
            right: 10,
            top: 20
          }}
        >
          <Button onClick={onClose} variant="link">
            <Image src={CloseIcon} width={20} height={20} alt="Close" />
          </Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Container>
            <Span size={20}>Your score was:</Span>
            <Span size={55} color="#77d353" bold>
              {playerScore}
            </Span>
          </Container>

          <Span>Do you want to save your score?</Span>
          <TextField
            placeholder="Insert your name here"
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
          />

          <div style={{ display: 'flex', gap: 10 }}>
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button onClick={() => handleAddPlayer}>Save</Button>
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
