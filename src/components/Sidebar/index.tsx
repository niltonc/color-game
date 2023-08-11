import React from 'react';
import {
  ScoreContainer,
  SidebarContainer,
  Text,
  TitleContainer
} from './styles';

const Sidebar: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <SidebarContainer>
      <div style={{}}>
        <TitleContainer>Current / Lastest Game</TitleContainer>
      </div>
      <ScoreContainer>
        <Text>Guessed Color</Text>
        <Text>Correct Color</Text>
        <Text>Score</Text>
      </ScoreContainer>
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
