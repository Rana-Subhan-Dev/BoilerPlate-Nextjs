'use client';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Content } from './layouts/content';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { useThemeChooser } from './contexts/theme-chooser';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica, Roboto, Arial, sans-serif;
    transition: all 0.50s linear;
  }
  `;

// Routing is handled by the Next.js App Router (src/app), pages are passed in as children
function App({ children }) {
  const { themeConfig } = useThemeChooser();
  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyles />
        <Header />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
