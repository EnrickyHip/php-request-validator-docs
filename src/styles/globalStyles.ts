import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: background-color 0.2s ease-in-out;
  }

  body {
    font-family: system-ui, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;
