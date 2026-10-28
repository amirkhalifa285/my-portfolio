import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import profilePicture from '../assets/updated_pic-removebg-preview.png';
import Button from './ui/Button';
import { Container } from './ui/Section';
import { profile } from '../data/profile';

const HeroSection = styled.section`
  padding-top: clamp(120px, 18vh, 180px);
  padding-bottom: ${({ theme }) => theme.space.section};
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: ${({ theme }) => theme.space['2xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

const Content = styled(motion.div)`
  max-width: 640px;
`;

const Status = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 ${({ theme }) => theme.space.lg};
  padding: 4px 12px 4px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.muted};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 3px #22c55e33;
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin: 0 0 ${({ theme }) => theme.space.lg};
`;

const Lead = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.3rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0 0 ${({ theme }) => theme.space.md};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

const Meta = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.subtle};
  margin: 0 0 ${({ theme }) => theme.space.xl};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const Socials = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 8px;

  a {
    display: inline-flex;
    padding: 8px;
    color: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      opacity: 1;
    }
  }
`;

const PhotoFrame = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    radial-gradient(120% 80% at 50% 0%, ${({ theme }) => theme.colors.surfaceHover} 0%, ${({ theme }) => theme.colors.surface} 70%);
  overflow: hidden;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 92%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: -1;
    width: 160px;
  }
`;

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

function Hero() {
  return (
    <HeroSection id="hero">
      <Grid>
        <Content {...fadeUp}>
          <Status>Open to software engineering roles</Status>
          <Name>{profile.name}</Name>
          <Lead>
            Software engineer working where <strong>hardware, networks and software</strong> meet:
            embedded systems, V2V communication and production infrastructure.
          </Lead>
          <Meta>B.Sc. Software Engineering · NOC Team Leader at Aristocrat Interactive</Meta>
          <Actions>
            <Button as="a" href="#projects">
              View work <FiArrowRight size={14} />
            </Button>
            <Button as="a" href={profile.resume} target="_blank" rel="noopener noreferrer" $variant="secondary">
              Resume <FiArrowUpRight size={14} />
            </Button>
            <Socials>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
            </Socials>
          </Actions>
        </Content>

        <PhotoFrame
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={profilePicture} alt="Amir Khalifa" />
        </PhotoFrame>
      </Grid>
    </HeroSection>
  );
}

export default Hero;
