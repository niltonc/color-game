'use client';
import styled, { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/global';

const Body = styled.body`
  margin: 0;
`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <Body>{children}</Body>
          <GlobalStyles />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
