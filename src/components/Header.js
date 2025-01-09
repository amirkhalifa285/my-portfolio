import React from 'react';
import styled from 'styled-components';
import logo from '../assets/aklogo.jpg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
  display: flex;
  align-items: center; /* Vertically center the items */
  justify-content: space-between; /* Space between logo and nav links */
  padding: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 50px; /* Adjust the height as needed */
  width: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
  margin: 0 15px;
  font-size: 1.1em;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease; /* Smooth transitions */

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic hover color */
  }

  &:after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary}; /* Dynamic underline color */
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary}; /* Dynamic button color */
  cursor: pointer;
  font-size: 1.2em;
  transition: color 0.3s ease; /* Smooth transitions */

  &:hover {
    color: ${({ theme }) => theme.colors.accent}; /* Dynamic hover color */
  }
`;

function Header({ toggleTheme, isDarkMode }) {
  return (
    <Nav>
      <a href="#hero">
        <Logo src={logo} alt="Amir Khalifa Logo" />
      </a>
      <NavLinks>
        <NavLink href="#hero">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </ThemeToggleButton>
      </NavLinks>
    </Nav>
  );
}

export default Header;
