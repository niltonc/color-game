import React from 'react';
import { SidebarContainer } from './styles';

const Sidebar: React.FC<ChildrenProp> = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
