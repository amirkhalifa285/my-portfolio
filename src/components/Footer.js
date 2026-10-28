import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Container } from './ui/Section';
import { profile } from '../data/profile';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.layout.gutter};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 4px;

  a {
    display: inline-flex;
    padding: 8px;
    color: ${({ theme }) => theme.colors.subtle};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Inner>
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <Links>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={16} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail size={16} /></a>
        </Links>
      </Inner>
    </FooterContainer>
  );
}

export default Footer;
