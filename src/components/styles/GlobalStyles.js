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
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    text-align: center;
  }

  p, li {
    font-size: 1.1em;
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  section {
    padding: 80px 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2em;
    }
  }
`;

export default GlobalStyle;