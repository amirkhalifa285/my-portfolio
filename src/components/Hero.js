import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile_picture.png'; // Change to .png for transparency

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;
    padding: 0 20px;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  flex-shrink: 0;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  object-position: center top;
  filter: drop-shadow(0 0 30px rgba(100, 255, 218, 0.4));
  transition: filter 0.3s ease;

  /* Subtle circular glow effect behind the image */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    background: radial-gradient(
      circle,
      rgba(100, 255, 218, 0.1) 0%,
      rgba(100, 255, 218, 0.05) 40%,
      transparent 70%
    );
    border-radius: 50%;
    z-index: -1;
    animation: pulseGlow 3s ease-in-out infinite alternate;
  }

  &:hover {
    filter: drop-shadow(0 0 40px rgba(100, 255, 218, 0.6));
  }

  @media (max-width: 768px) {
    width: 280px;
    max-height: 360px;
  }

  @media (max-width: 480px) {
    width: 240px;
    max-height: 300px;
  }
`;

// Alternative approach with a background glow element
const GlowBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(100, 255, 218, 0.15) 0%,
    rgba(100, 255, 218, 0.08) 30%,
    rgba(100, 255, 218, 0.03) 50%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: -1;
  animation: pulseGlow 4s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 20px 0;
  text-align: left;

  span {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
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

const CallToAction = styled(motion.a)`
  margin-top: 0;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);
  }
`;

// Keyframe animation for the glow effect
const GlobalStyles = styled.div`
  @keyframes pulseGlow {
    0% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
`;

function Hero() {
  return (
    <>
      <GlobalStyles />
      <HeroSection id="hero">
        <HeroContainer>
          <ProfileImageWrapper
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <GlowBackground />
            <ProfileImage 
              src={profilePicture} 
              alt="Amir Khalifa"
            />
          </ProfileImageWrapper>
          
          <HeroContent>
            <Title 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span>Amir Khalifa</span>
            </Title>
            <Subtitle 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
            >
              Software Engineering Student specializing in Cybersecurity and Cloud Development.
            </Subtitle>
            <CallToAction 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              View My Work
            </CallToAction>
          </HeroContent>
        </HeroContainer>
      </HeroSection>
    </>
  );
}

export default Hero;