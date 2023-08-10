import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fffaf4;
  }
`;

export default GlobalStyles;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ScoreContainer = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  border-top: 2px solid ${theme.colors.gray_100};
  padding-inline: 20px;
`;
