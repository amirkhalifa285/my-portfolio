import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiSun, FiMoon, FiArrowUpRight } from 'react-icons/fi';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme, $scrolled }) => ($scrolled ? `${theme.colors.background}cc` : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'saturate(180%) blur(12px)' : 'none')};
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: background 0.2s ease, border-color 0.2s ease;
`;

const Inner = styled.div`
  max-width: calc(${({ theme }) => theme.layout.maxWidth} + 2 * ${({ theme }) => theme.layout.gutter});
  margin: 0 auto;
  height: 64px;
  padding: 0 ${({ theme }) => theme.layout.gutter};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wordmark = styled.a`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.base};
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.layout.gutter} ${({ theme }) => theme.space.lg};
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 14px 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ResumeLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-bottom: none;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`;

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

function Header({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <Nav $scrolled={scrolled || menuOpen}>
      <Inner>
        <Wordmark href="#hero" onClick={close}>Amir Khalifa</Wordmark>
        <Right>
          <Links $open={menuOpen}>
            {NAV_ITEMS.map(({ href, label }) => (
              <NavLink key={href} href={href} onClick={close}>{label}</NavLink>
            ))}
            <ResumeLink href="/Amir-Khalifa-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={close}>
              Resume <FiArrowUpRight size={14} />
            </ResumeLink>
          </Links>
          <IconButton
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDarkMode ? 'Light theme' : 'Dark theme'}
          >
            {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </IconButton>
          <MenuButton
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </MenuButton>
        </Right>
      </Inner>
    </Nav>
  );
}

export default Header;
