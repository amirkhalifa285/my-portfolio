import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: auto;
  font-size: 1.2em;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutText>
        Motivated software engineering student with a specialty in full-stack development and cybersecurity, 
        able to solve complex problems with creative solutions. Strong proficiency in database management and network operations. 
        Looking to apply both analytical and technical skills as part of a dynamic team.
      </AboutText>
    </AboutSection>
  );
}

export default About;