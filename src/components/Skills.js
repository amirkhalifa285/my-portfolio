import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px${({ theme }) => theme.colors.primary}; /* This can remain unchanged */

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic primary color */
    margin-bottom: 15px;
    text-align: center;
    transition: color 0.3s ease; /* Smooth transition for theme toggle */
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
      text-align: center;
      transition: color 0.3s ease; /* Smooth transition for text color */
    }
  }

  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth background transition */
`;


function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsContainer>
        <SkillCategory>
          <h3>Languages & Scripting</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>Assembly</li>
            <li>Bash</li>
            <li>PowerShell</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React.js</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Cloud & Operating Systems</h3>
          <ul>
            <li>AWS</li>
            <li>Ubuntu</li>
            <li>Unix</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Security & Networking</h3>
          <ul>
            <li>Network Protocols</li>
            <li>Cryptography</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Soft Skills</h3>
          <ul>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Monitoring</li>
          </ul>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;
