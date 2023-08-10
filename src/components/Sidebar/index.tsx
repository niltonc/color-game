import React from 'react';
import { SidebarContainer } from './styles';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
