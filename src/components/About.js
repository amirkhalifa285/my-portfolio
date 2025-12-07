import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  min-height: 100vh; /* Ensure full viewport height */
  padding: 0 20px; /* Adjust as needed */
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
`;

const AboutContent = styled.div`
  flex-grow: 1; /* Ensures content stretches fully */
  max-width: 800px; /* Keeps content width constrained */
  text-align: center; /* Center-align the text */
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary}; /* Highlighted title color */
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <Title>About Me</Title>
        <Paragraph>
          I am a 4th year software engineering student with an academic specialty in full-stack development and cybersecurity,
          Passionate about the realm of cloud computing, networking and cybersecurity.
          And I like to tinker with hardware frequently, and try out different linux distors...

          I use Arch btw.
        </Paragraph>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
