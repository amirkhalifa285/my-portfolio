import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile_picture.jpg';

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
  gap: 20px;
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
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
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
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage 
            src={profilePicture} 
            alt="Amir Khalifa"
          />
        </ProfileImageWrapper>
        
        <HeroContent>
          <Title initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            Hi, I'm <span>Amir Khalifa</span>
          </Title>
          <Subtitle 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
          >
            Software Engineering Student specializing in Cybersecurity and Cloud Development.
          </Subtitle>
          <CallToAction 
            href="#projects" 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            View My Work
          </CallToAction>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;