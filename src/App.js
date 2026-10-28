import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/GlobalStyles';
import { lightTheme, darkTheme } from './components/styles/Theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


const THEME_KEY = 'theme';

function getInitialDarkMode() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved === 'dark';
  } catch (e) {
    // Storage unavailable (private mode etc.) - fall through to OS preference
  }
  return !window.matchMedia || window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
    } catch (e) {
      // Ignore - theme just won't persist
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main>
          <Hero />
          <About />
          <Certificates />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;