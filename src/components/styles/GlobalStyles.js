import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  p, li {
    font-size: 1.1em;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  section {
    padding: 100px 20px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    body { padding-top: 70px; }
    section { padding: 60px 20px; }
  }
`;

export default GlobalStyle;
