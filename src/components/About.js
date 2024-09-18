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
        I am a disciplined and honest individual with a passion for analytical challenges. I thrive in intellectually
        stimulating environments and am committed to delivering high-quality results while embracing new growth
        opportunities. I manage my responsibilities and time with precision, and I am confident in my ability to
        contribute meaningfully to any team, ensuring its continued success.
      </AboutText>
    </AboutSection>
  );
}

export default About;