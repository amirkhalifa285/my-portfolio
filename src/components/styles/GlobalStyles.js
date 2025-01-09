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
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    text-align: center;
  }

  p, li {
    font-size: 1.1em;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text}; /* Ensure paragraphs and lists use text color */
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
    background-color: ${({ theme }) => theme.colors.background}; /* Ensures sections follow theme */
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
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
