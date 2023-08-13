import React from 'react';
import { SidebarContainer } from './styles';
import HistoryTab from './historyTab';
import ScoresTab from './scoresTab';
interface SidebarProps {
  children?: React.ReactNode;
  tab?: boolean;
  onClick?: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ children, tab, onClick }) => {
  return (
    <SidebarContainer>
      {!tab && <HistoryTab onClick={onClick} />}
      {tab && <ScoresTab onClick={onClick} />}
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
