import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
    color-scheme: ${({ theme }) => theme.mode};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.6;
    transition: background-color 0.2s ease, color 0.2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 ${({ theme }) => theme.space.md};
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  p, li {
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.muted};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.15s ease, opacity 0.15s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary}33;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }

  section {
    padding: ${({ theme }) => theme.space.section} ${({ theme }) => theme.layout.gutter};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    section { padding: 64px 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
