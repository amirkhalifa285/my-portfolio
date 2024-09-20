import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Removed unused imports
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/GlobalStyles';
import { theme } from './components/styles/Theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {}
        <GlobalStyle />
        <Header />
        <main>
          <Hero />
          <About />
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