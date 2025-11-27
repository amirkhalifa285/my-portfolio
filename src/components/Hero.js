import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile_picture.png';
import Button from './ui/Button';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background: radial-gradient(circle at 50% 50%, ${({ theme }) => theme.colors.primary}10 0%, transparent 50%);
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Greeting = styled(motion.p)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 20px 0;
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  margin: 0 0 40px 0;
  color: ${({ theme }) => theme.colors.accent};
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const ProfileImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.primary}40);
  z-index: 2;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const GlowCircle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.15;
  filter: blur(60px);
  border-radius: 50%;
  z-index: 1;
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, my name is
          </Greeting>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Amir Khalifa.
            <br />
            <span>I build secure and scalable solutions.</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineering Student specializing in Cybersecurity and Cloud Development.
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button as="a" href="#projects">Check out my work</Button>
            <Button as="a" href="#contact" variant="outline">Contact Me</Button>
          </ButtonGroup>
        </HeroContent>

        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlowCircle
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <ProfileImage src={profilePicture} alt="Amir Khalifa" />
        </ProfileImageWrapper>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;