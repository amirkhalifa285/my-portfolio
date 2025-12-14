import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/aklogo.jpg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  cursor: pointer;
  animation: spin 20s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 15px;
  font-size: 1.1em;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 1.3em;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.primary}; /* Primary theme color */
  color: ${({ theme }) => theme.colors.background}; /* Contrast text color */
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.accent}; /* Slight hover effect */
  }
`;

function Header({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <a href="#hero">
        <Logo src={logo} alt="Amir Khalifa Logo" />
      </a>
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>
      <NavLinks open={menuOpen}>
        <NavLink href="#hero" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</NavLink>
        <NavLink href="#experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
        <NavLink href="#projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink href="#skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </ThemeToggleButton>
      </NavLinks>
    </Nav>
  );
}

export default Header;
