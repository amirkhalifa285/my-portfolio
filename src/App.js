import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/GlobalStyles';
import { theme } from './components/styles/Theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;